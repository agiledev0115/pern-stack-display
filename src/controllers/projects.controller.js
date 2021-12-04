const pool = require('../db');

const createProject = async (req, res, next) => {
  const { title, description } = req.body;

  try {
		const newProject = await pool.query(
			'INSERT INTO project (title, description) VALUES($1, $2) RETURNING *',
			[title, description]
		);

		res.json(newProject.rows[0]);
	} catch (error) {
		next(error);
	}
};

const getAllProjects = async (req, res, next) => {
	try {
		const allProjects = await pool.query('SELECT * FROM project');
		res.json(allProjects.rows);
	} catch (error) {
		next(error);
	}
};

const getProject = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await pool.query('SELECT * FROM project WHERE id = $1', [
			id,
		]);

		if (result.rows.length === 0)
			return res.status(404).json({ message: 'Project not found' });

		res.json(result.rows[0]);
	} catch (error) {
		next(error);
	}
};

const updateProject = async (req, res) => {
	try {
		const { id } = req.params;
		const { title, description } = req.body;

		const result = await pool.query(
			'UPDATE project SET title = $1, description = $2 WHERE id = $3 RETURNING *',
			[title, description, id]
		);

		if (result.rows.length === 0)
			return res.status(404).json({ message: 'Project not found' });

		return res.json(result.rows[0]);
	} catch (error) {
		next(error);
	}
};

const deleteProject = async (req, res) => {
	try {
		const { id } = req.params;
		const result = await pool.query('DELETE FROM project WHERE id = $1', [id]);

		if (result.rowCount === 0)
			return res.status(404).json({ message: 'Project not found' });
		return res.sendStatus(204);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	createProject,
	getAllProjects,
	getProject,
	updateProject,
	deleteProject,
};
