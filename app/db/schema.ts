import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),

  fullName: varchar("full_name", { length: 100 }).notNull(),

  email: varchar("email", { length: 255 }).notNull().unique(),

  phoneNumber: varchar("phone_number", { length: 20 }).notNull().unique(),

  gender: varchar("gender", { length: 30 }).notNull(),

  password: varchar("password", { length: 255 }).notNull(),

  role: varchar("role", { length: 20 }).notNull().default("customer"),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});