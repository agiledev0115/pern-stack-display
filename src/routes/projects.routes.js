const { Router } = require('express');
const {
	createProject,
	getAllProjects,
	getProject,
	updateProject,
	deleteProject,
} = require('../controllers/projects.controller');

const router = Router();

router.post('/projects', createProject);
router.get('/projects', getAllProjects);
router.get('/projects/:id', getProject);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);

module.exports = router;
