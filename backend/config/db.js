// backend/config/db.js
const { Pool } = require('pg');
require('dotenv').config();

// Parsing the full database URL from the .env
const dbUrl = process.env.DATABASE_URL; // Add this to your .env file as DATABASE_URL=your_database_url_here
const pool = new Pool({
  connectionString: dbUrl,
  ssl: {
    rejectUnauthorized: false, // Disable SSL certificate validation (for dev)
  },
});

pool.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

module.exports = pool;

