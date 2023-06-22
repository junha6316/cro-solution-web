/** @type {import('next').NextConfig} */

const sqlite3 = require("sqlite3");
const sqlite = require("sqlite");

async function initialize() {
  const db = await sqlite.open({
    filename: "./db.sqlite",
    driver: sqlite3.Database,
  });
  await db.run(
    `CREATE TABLE IF NOT EXISTS account_user (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      mall_id TEXT,
      access_token TEXT,
      refresh_token TEXT
    );`
  );
}

initialize()
  .then(console.log)
  .catch((error) => {
    console.error(error);
  });

const nextConfig = {};

module.exports = nextConfig;
