require('dotenv').config();
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.USER_DB || 'postgres',
  database: process.env.DATABASE || "db",
  password: process.env.PASS_DB || "postgres",
  port: 5432,
  host: "localhost",
});

module.exports = { pool };