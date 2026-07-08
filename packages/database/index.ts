import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

let database: ReturnType<typeof drizzle> | undefined;

export function getDatabase() {
  if (!database) {
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });

    database = drizzle(pool);
  }

  return database;
}
