const express = require('express');
const { getExperience, addExperience, deleteExperience, editExperience, getSingleExperience } = require('../controllers/experience');
const router = express.Router();
const auth = require('../middleware/auth');

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.get('/experience',getExperience);
router.post('/experience',auth,addExperience);
router.delete('/experience/:id',auth,deleteExperience);
router.put('/experience/:id',auth,editExperience);
router.get('/experience/:id',auth,getSingleExperience);

module.exports = router;
