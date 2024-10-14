import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const DATABASE_URL = process.env.DATABASE_URL
const sql = neon(DATABASE_URL);
export const db = drizzle(sql, { schema });
