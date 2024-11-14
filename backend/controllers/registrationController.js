// backend/controllers/registrationController.js
const pool = require('../config/db');

// Create
exports.createRegistration = async (req, res) => {
  const { name, email, date_of_birth, phone_number } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO Registration (name, email, date_of_birth, phone_number) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, date_of_birth, phone_number]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Read
exports.getAllRegistrations = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM Registration');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
exports.updateRegistration = async (req, res) => {
  const { id } = req.params;
  const { name, email, date_of_birth, phone_number } = req.body;
  try {
    const result = await pool.query(
      'UPDATE Registration SET name=$1, email=$2, date_of_birth=$3, phone_number=$4 WHERE id=$5 RETURNING *',
      [name, email, date_of_birth, phone_number, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
exports.deleteRegistration = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM Registration WHERE id=$1', [id]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
