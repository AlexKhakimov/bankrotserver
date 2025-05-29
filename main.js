import express from "express";
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
