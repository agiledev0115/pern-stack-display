// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ProjectsList = () => {
	const [projects, setProjects] = useState([]);
	const navigate = useNavigate();

	const loadProjects = async () => {
		const response = await fetch('http://localhost:4000/projects');
		const data = await response.json();
		setProjects(data);
	};

	const handleDelete = async (id) => {
		try {
			await fetch(`http://localhost:4000/projects/${id}`, {
				method: 'DELETE',
			});
			setProjects(projects.filter((project) => project.id !== id));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		loadProjects();
	}, []);

	return (
		<>
			{projects.map((project) => (
				<Card
					key={project.id}
					style={{ margin: '1rem', backgroundColor: '#1e272e' }}
				>
					<CardContent
						style={{
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<div
							style={{
								color: 'white',
							}}
						>
							<Typography>{project.title}</Typography>
							<Typography>{project.description}</Typography>
						</div>
						<div>
							<Button
								variant="contained"
								startIcon={<EditIcon />}
								color="primary"
								onClick={() => navigate(`/projects/${project.id}/edit`)}
							>
								Edit
							</Button>
							<Button
								variant="contained"
								startIcon={<DeleteIcon />}
								color="warning"
								onClick={() => handleDelete(project.id)}
								style={{ marginLeft: '.5rem' }}
							>
								Delete
							</Button>
						</div>
					</CardContent>
				</Card>
			))}
		</>
	);
};

export default ProjectsList;
