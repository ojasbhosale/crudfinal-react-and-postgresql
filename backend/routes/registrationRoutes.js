// backend/routes/registrationRoutes.js
const express = require('express');
const router = express.Router();
const {
  createRegistration,
  getAllRegistrations,
  updateRegistration,
  deleteRegistration,
} = require('../controllers/registrationController');

router.post('/', createRegistration);
router.get('/', getAllRegistrations);
router.put('/:id', updateRegistration);
router.delete('/:id', deleteRegistration);

module.exports = router;
