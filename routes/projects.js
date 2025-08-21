const express = require('express');
const { getProjects, addProjects, editProjects, deleteProjects, getSingleProject, editSingleProject } = require('../controllers/projects');
const router = express.Router();
const auth = require('../middleware/auth');

 
router.get('/projects',getProjects);
router.post('/projects',auth,addProjects);
router.delete('/projects/:id',auth,deleteProjects); 
router.get('/projects/:id',auth,getSingleProject);
router.put('/projects/:id',auth,editSingleProject);

module.exports = router;