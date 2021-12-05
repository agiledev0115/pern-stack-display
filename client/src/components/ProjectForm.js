// @ts-nocheck
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
	Grid,
	Card,
	Typography,
	CardContent,
	TextField,
	Button,
  CircularProgress
} from '@mui/material';

const ProjectForm = () => {
	const [project, setProject] = useState({
		title: '',
		description: '',
	});
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);

		console.log('project:', project, ' type: ', typeof project);
		const res = await fetch('http://localhost:4000/projects', {
			method: 'POST',
			body: JSON.stringify(project),
			headers: { 'Content-Type': 'application/json' },
		});
		const data = await res.json();
		console.log('data: ', data);

		setLoading(false);
		navigate('/');
	};

	const handleChange = (e) => {
		setProject({ ...project, [e.target.name]: e.target.value });
	};

	return (
		<Grid
			container
			direction="column"
			alignItems="center"
			justifyContent="center"
		>
			<Grid item xs={3}>
				<Card
					sx={{ mt: 5 }}
					style={{ backgroundColor: '#455A64', padding: '1rem' }}
				>
					<Typography variant="h5" textAlign="center" color="white">
						New Project
					</Typography>
					<CardContent>
						<form onSubmit={handleSubmit}>
							<TextField
								variant="filled"
								label="project title"
								sx={{ display: 'block', margin: '.5rem 0' }}
								name="title"
								onChange={handleChange}
								inputProps={{ style: { color: 'white' } }}
								InputLabelProps={{ style: { color: 'white' } }}
							/>
							<TextField
								variant="filled"
								label="project description"
								multiline
								rows={4}
								sx={{ display: 'block', margin: '.5rem 0' }}
								name="description"
								onChange={handleChange}
								inputProps={{ style: { color: 'white' } }}
								InputLabelProps={{ style: { color: 'white' } }}
							/>

							<Button variant="contained" color="primary" type="submit" disabled={!project.title || !project.description}>
								{loading ? (
                  <CircularProgress color="inherit" size={24}/>
                ) : (
                  "Create"
                )}
							</Button>
						</form>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
}

export default ProjectForm