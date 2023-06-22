import sqlite3 from "sqlite3";
import { Database, open } from "sqlite";

let db: Database | null = null;

async function openDb() {
  if (db) return db;

  db = await open({
    filename: "./db.sqlite",
    driver: sqlite3.Database,
  });

  return db;
}

export async function getDb(): Promise<Database> {
  if (!db) {
    db = await openDb();
  }
  return db as Database;
}
