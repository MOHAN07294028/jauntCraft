import { NextResponse } from "next/server";
import { db } from "../../db";
import { users } from "../../db/schema";

export async function GET() {
  try {
    const allUsers = await db
      .select({
        id: users.id,
        fullName: users.fullName,
        email: users.email,
        phoneNumber: users.phoneNumber,
        gender: users.gender,
        role: users.role,
        createdAt: users.createdAt,
      })
      .from(users);

    return NextResponse.json(
      {
        success: true,
        users: allUsers,
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Get users API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
