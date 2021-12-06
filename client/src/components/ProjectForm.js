// @ts-nocheck
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
	Grid,
	Card,
	Typography,
	CardContent,
	TextField,
	Button,
	CircularProgress,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

const ProjectForm = () => {
	const [project, setProject] = useState({
		title: '',
		description: '',
	});
	const [loading, setLoading] = useState(false);
	const [editing, setEditing] = useState(false);

	const params = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (params.id) {
			loadProject(params.id);
		}
	}, [params.id]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);

		try {
			if (editing) {
				const response = await fetch(
					'http://localhost:4000/projects/' + params.id,
					{
						method: 'PUT',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(project),
					}
				);
				await response.json();
			} else {
				const response = await fetch('http://localhost:4000/projects', {
					method: 'POST',
					body: JSON.stringify(project),
					headers: { 'Content-Type': 'application/json' },
				});
				await response.json();
			}

			setLoading(false);
			navigate('/');
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = (e) => {
		setProject({ ...project, [e.target.name]: e.target.value });
	};

	const loadProject = async (id) => {
		const response = await fetch(`http://localhost:4000/projects/${id}`);
		const data = await response.json();
		setProject({ title: data.title, description: data.description });
		setEditing(true);
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
						Project Details
					</Typography>
					<CardContent>
						<form onSubmit={handleSubmit}>
							<TextField
								variant="filled"
								label="project title"
								sx={{ display: 'block', margin: '.5rem 0' }}
								name="title"
								value={project.title}
								onChange={handleChange}
								inputProps={{ style: { color: 'white' } }}
								InputLabelProps={{ style: { color: 'white' } }}
							/>
							<TextField
								variant="filled"
								label="project description"
								multiline
								rows={6}
								sx={{ display: 'block', margin: '.5rem 0' }}
								name="description"
								value={project.description}
								onChange={handleChange}
								inputProps={{ style: { color: 'white' } }}
								InputLabelProps={{ style: { color: 'white' } }}
							/>

							{
								<div style={{ textAlign: 'center', padding: '1rem' }}>
									<Button
										variant="contained"
										startIcon={<SaveIcon />}
										color="primary"
										type="submit"
										disabled={!project.title || !project.description}
									>
										{loading ? (
											<CircularProgress color="inherit" size={24} />
										) : (
											'Save'
										)}
									</Button>
								</div>
							}
						</form>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};

export default ProjectForm;
