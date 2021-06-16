import './ProjectCarousel.css'

import { useState, useEffect } from 'react';

import PaginationController from 'components/PaginationController/PaginationController';
import ProjectCarouselCard from 'components/Projects/ProjectCarouselCard/ProjectCarouselCard';
import ProjectCarouselController from './ProjectCarouselController';

import projects from 'assets/data/projects.json';

function ProjectCarousel() {

	const featuredProjects = projects.slice(0, 4);
	const [ activeCard, setActiveCard ] = useState(0);

	const next = () => {
		var i = activeCard+1
		if(i>featuredProjects.length-1){
			i = 0;
		}
		setActiveCard(i)
	}
	const previous = () => {
		var i = activeCard-1
		if(i<0){
			i = featuredProjects.length-1;
		}
		setActiveCard(i)
	}

	useEffect(() => {
		const interval = setInterval(next, 4000);
		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='project__carousel'>
			<ProjectCarouselController action={previous} direction="left" />
			<ProjectCarouselController action={next} direction="right" />
			<ProjectCarouselCard project={featuredProjects[activeCard]}/>
			<PaginationController index={activeCard} setIndex={setActiveCard} link={featuredProjects} />
		</div>
	);
}

export default ProjectCarousel;