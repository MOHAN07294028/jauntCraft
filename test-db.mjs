
import { config } from "dotenv";
import pg from "pg";

config({ path: ".env.local" });

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL_UNPOOLED,
  connectionTimeoutMillis: 10000,
});

try {
  await client.connect();

  const result = await client.query(
    "SELECT NOW() AS current_time, current_database() AS database"
  );

  console.log("Database connected successfully!");
  console.log(result.rows[0]);
} catch (error) {
  console.error("Database connection failed:");
  console.error(error);
} finally {
  await client.end().catch(() => {});
}
