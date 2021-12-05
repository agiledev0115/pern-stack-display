// @ts-nocheck
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, Typography } from '@mui/material';

const ProjectsList = () => {
	const [projects, setProjects] = useState([]);
	const navigate = useNavigate();

	const loadProjects = async () => {
		const response = await fetch('http://localhost:4000/projects', {});
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
			<h1>Projects List</h1>
			{projects.map((project) => (
				<Card style={{ marginBottom: '1rem', backgroundColor: '#1e272e' }}>
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
								color="inherit"
								onClick={() => navigate(`/projects/${project.id}/edit`)}
							>
								Edit
							</Button>
							<Button
								variant="contained"
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
