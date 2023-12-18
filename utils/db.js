// db.js
const { Pool } = require('pg');

// Configure the database connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: '1234',
  port: 5432, // Default PostgreSQL port
});

module.exports = pool;
