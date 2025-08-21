const express = require('express');
const { getAbout, addAbout, editAbout } = require('../controllers/about');
const auth = require('../middleware/auth');
const router = express.Router();

// Public route - no authentication required
router.get('/about', getAbout);

// Protected routes - require authentication
router.post('/about', auth, addAbout); 
router.put('/about', auth, editAbout);

module.exports = router;