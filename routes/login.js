const express = require('express');
const { loginAuth } = require('../controllers/login');
const router = express.Router();

router.post('/login', loginAuth);

module.exports = router;
