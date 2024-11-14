// backend/app.js
const express = require('express');
const cors = require('cors'); 
const registrationRoutes = require('./routes/registrationRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/registrations', registrationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
