import express from "express";
import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(express.json());
// Подключение к PostgreSQL
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});
// Проверка подключения при старте
async function initDB() {
    try {
        const client = await pool.connect();
        await client.query(`
      CREATE TABLE IF NOT EXISTS leads (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);
        client.release();
        console.log("Database initialized");
    }
    catch (err) {
        console.error("Database init error:", err);
        process.exit(1);
    }
}
// Роут для сохранения данных
app.post("/api/send-phone", async (req, res) => {
    const { name, phone } = req.body;
    if (!name || !phone) {
        return res.status(400).json({ error: "Name and phone required" });
    }
    try {
        const result = await pool.query("INSERT INTO leads (name, phone) VALUES ($1, $2) RETURNING *", [name, phone]);
        res.status(201).json(result.rows[0]);
    }
    catch (err) {
        console.error("DB error:", err);
        res.status(500).json({ error: "Database operation failed" });
    }
});
// Запуск сервера
initDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
});
