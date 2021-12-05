import {
	Box,
	AppBar,
	Container,
	Toolbar,
	Typography,
	Button,
} from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
	const navigate = useNavigate();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" color="transparent">
				<Container>
					<Toolbar>
						<Typography variant="h6" sx={{ flexGrow: 1 }}>
							<Link to="/" style={{ textDecoration: "none", color: "white" }}>
								Project Database
							</Link>
						</Typography>

						<Button
							variant="contained"
							color="success"
							onClick={() => navigate('/projects/new')}
						>
							New Project
						</Button>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
}
