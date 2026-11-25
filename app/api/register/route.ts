
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { db } from "../../db";
import { users } from "../../db/schema";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { fullName, email, phoneNumber, gender, password } = body;

    // Validate required fields
    if (
      !fullName?.trim() ||
      !email?.trim() ||
      !phoneNumber?.trim() ||
      !gender ||
      !password
    ) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Invalid email address." },
        { status: 400 }
      );
    }

    // Validate password
    if (typeof password !== "string" || password.length < 6) {
      return NextResponse.json(
        { success: false, message: "Password must be at least 6 characters." },
        { status: 400 }
      );
    }

    // Validate gender
    const allowedGenders = ["female", "male", "prefer-not-to-say"];

    if (!allowedGenders.includes(gender)) {
      return NextResponse.json(
        { success: false, message: "Invalid gender selection." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedPhone = phoneNumber.trim();

    // Check if email/phone already exists
    const [existingEmail, existingPhone] = await Promise.all([
      db
        .select({ id: users.id })
        .from(users)
        .where(eq(users.email, normalizedEmail))
        .limit(1),
      db
        .select({ id: users.id })
        .from(users)
        .where(eq(users.phoneNumber, normalizedPhone))
        .limit(1),
    ]);

    const emailExists = existingEmail.length > 0;
    const phoneExists = existingPhone.length > 0;

    if (emailExists && phoneExists) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and phone number already registered.",
        },
        { status: 409 }
      );
    }

    if (emailExists) {
      return NextResponse.json(
        { success: false, message: "Email already registered." },
        { status: 409 }
      );
    }

    if (phoneExists) {
      return NextResponse.json(
        { success: false, message: "Phone number already registered." },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Insert user into database
    const [newUser] = await db
      .insert(users)
      .values({
        fullName: fullName.trim(),
        email: normalizedEmail,
        phoneNumber: normalizedPhone,
        gender,
        password: hashedPassword,
        role: "customer",
      })
      .returning({
        id: users.id,
        fullName: users.fullName,
        email: users.email,
        phoneNumber: users.phoneNumber,
        gender: users.gender,
        createdAt: users.createdAt,
      });

    return NextResponse.json(
      {
        success: true,
        message: "Registration successful!",
        user: newUser,
      },
      { status: 201 }
    );

  } catch (error: unknown) {
    console.error("Registration API error:", error);

    const getPgCode = (err: unknown, depth = 0): string | undefined => {
      if (depth > 5 || typeof err !== "object" || err === null) return undefined;
      const anyErr = err as { code?: unknown; cause?: unknown };
      if (typeof anyErr.code === "string") return anyErr.code;
      return getPgCode(anyErr.cause, depth + 1);
    };

    const getErrorText = (err: unknown, depth = 0): string => {
      if (depth > 5 || typeof err !== "object" || err === null) return "";
      const anyErr = err as {
        message?: unknown;
        detail?: unknown;
        constraint?: unknown;
        cause?: unknown;
      };
      const parts = [
        typeof anyErr.message === "string" ? anyErr.message : "",
        typeof anyErr.detail === "string" ? anyErr.detail : "",
        typeof anyErr.constraint === "string" ? anyErr.constraint : "",
      ];
      const causeText = getErrorText(anyErr.cause, depth + 1);
      return [...parts, causeText].filter(Boolean).join(" ");
    };

    const pgCode = getPgCode(error);
    if (pgCode === "23505") {
      const text = getErrorText(error).toLowerCase();
      const emailConflict = text.includes("email");
      const phoneConflict = text.includes("phone");

      let message = "Email or phone number already registered.";
      if (emailConflict && phoneConflict) {
        message = "Email and phone number already registered.";
      } else if (emailConflict) {
        message = "Email already registered.";
      } else if (phoneConflict) {
        message = "Phone number already registered.";
      }

      return NextResponse.json({ success: false, message }, { status: 409 });
    }

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
