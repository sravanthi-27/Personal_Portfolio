// routes/portfolioRoute.js

const express = require('express');
const { sendEmailController } = require('../controllers/portfolioController');

const router = express.Router();

router.post('/sendEmail', sendEmailController);

module.exports = router;
