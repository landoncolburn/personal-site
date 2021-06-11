import './ProjectContainer.css';

import Project from 'components/Projects/Project/Project';

function ProjectContainer(props) {
	const projects = props.projects
	return (
		<div className="post__container">
			{projects.map(project=>(
				<Project project={project} />
			))}
		</div>
	)
}

export default ProjectContainer;