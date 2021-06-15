import './ProjectCarouselCard.css'

function ProjectCarouselCard(props) {

	const project = props.project;

	const primaryColor = `hsla(${project.color[0]}, ${project.color[1]}%, ${project.color[2]}%, ${project.color[3]})`;
	const secondaryColor = `hsla(${project.color[0]}, ${project.color[1]}%, ${project.color[2]-15}%, ${project.color[3]})`;

	return (
		<div style={{background: `linear-gradient(0deg, ${primaryColor}, ${secondaryColor})`}} className='project__carousel__card'>
			<h2 className="project__featured__name">{project.name}</h2>
		</div>
	);
}

export default ProjectCarouselCard;