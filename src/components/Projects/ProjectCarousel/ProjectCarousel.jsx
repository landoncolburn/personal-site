import './ProjectCarousel.css'

import { useState } from 'react';

import PaginationController from 'components/PaginationController/PaginationController';
import ProjectCarouselCard from 'components/Projects/ProjectCarouselCard/ProjectCarouselCard';

import projects from 'assets/data/projects.json';

function ProjectCarousel() {

	const featuredProjects = projects.slice(0, 4);
	const [ activeCard, setActiveCard ] = useState(0);

	return (
		<div className='project__carousel'>
			<ProjectCarouselCard project={featuredProjects[activeCard]}/>
			<PaginationController index={activeCard} setIndex={setActiveCard} link={featuredProjects} />
		</div>
	);
}

export default ProjectCarousel;