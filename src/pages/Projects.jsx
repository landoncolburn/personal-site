import Header from "components/Header/Header";
import Section from "components/Section/Section";
import Footer from "components/Footer/Footer";

import ProjectContainer from "components/Projects/ProjectContainer/ProjectContainer";
import ProjectCarousel from "components/Projects/ProjectCarousel/ProjectCarousel";

import projects from 'assets/data/projects.json';

function Home(){
	return(
		<div className="home">
			<Header />
			<Section >
				<h1>Projects</h1>
				<h3 style={{fontWeight: 400, fontSize: '1em', color: '#999'}}>* Please note: this is temporary test data. They're not real projects.</h3>
				<ProjectCarousel />
				<ProjectContainer projects={projects}/>
			</Section>
			<Footer />
		</div>
	);
}

export default Home;