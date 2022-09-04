import React from 'react';
import AboutMe from '../components/AboutMe';
import Head from '../components/Head';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import { ThemeProvider } from '../components/ThemeContext';
import WorkExperience from '../components/WorkExperience';

export default function IndexPage() {
	return (
		<>
			<Head />
			<ThemeProvider>
				<Layout>
					<Hero />
					<AboutMe />
					<WorkExperience />
				</Layout>
			</ThemeProvider>
		</>
	);
}
