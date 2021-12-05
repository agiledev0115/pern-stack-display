// @ts-nocheck
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Menu from './components/Navbar';

import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';

export default function App() {

	return (
		<BrowserRouter>
			<Menu />
			<Container>
				<Routes>
					<Route path="/" element={<ProjectList />} />
					<Route path="/projects/new" element={<ProjectForm />} />
				</Routes>
			</Container>
		</BrowserRouter>
	);
}
