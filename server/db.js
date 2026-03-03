import Database from 'better-sqlite3'

export function createDb(dbPath) {
  // Check if we are in production (Vercel)
  const isVercel = process.env.NODE_ENV === 'production';

  try {
    // On Vercel, we don't want to block the app if SQLite fails
    const db = new Database(dbPath)
    db.pragma('journal_mode = WAL')

    db.exec(`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        created_at TEXT NOT NULL,
        ip TEXT,
        user_agent TEXT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        service TEXT,
        budget TEXT,
        message TEXT NOT NULL
      );
    `)

    const insertStmt = db.prepare(`
      INSERT INTO contact_messages (
        created_at, ip, user_agent, name, email, phone, service, budget, message
      ) VALUES (
        @created_at, @ip, @user_agent, @name, @email, @phone, @service, @budget, @message
      )
    `)

    return {
      insertContactMessage: (row) => insertStmt.run(row).lastInsertRowid,
    }
  } catch (err) {
    console.error("SQLite failed to initialize:", err.message);
    
    // Return a 'fake' function so the server doesn't crash when someone submits a form
    return {
      insertContactMessage: () => {
        console.warn("Database unavailable. Message not saved, but continuing to email...");
        return Date.now(); // Return a fake ID
      },
    }
  }
}