import Database from "better-sqlite3";

const db = new Database("database.sqlite");

// Create tables if they do not exist
db.prepare(`
    CREATE TABLE IF NOT EXISTS clients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT,
        phone TEXT
    )
`).run();

db.prepare(`
    CREATE TABLE IF NOT EXISTS projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        client_id INTEGER,
        name TEXT NOT NULL,
        description TEXT,
        status TEXT DEFAULT 'Not Started',
        FOREIGN KEY(client_id) REFERENCES clients(id)
    )
`).run();

export default db;