import './Project.css'

function Project(props) {
	const { name, color, date } = props.project;

	const dateObj = new Date(date);
	const str = dateObj.toLocaleDateString('en-US', { month: 'long', year: '2-digit' });
	const dateString = str.substring(0, str.length-2) + "'" + str.substring(str.length-2);

	const primaryColor = `hsla(${color[0]}, ${color[1]}%, ${color[2]}%, ${color[3]})`;
	const secondaryColor = `hsla(${color[0]}, ${color[1]}%, ${color[2]-15}%, ${color[3]})`;

	return (
		<div className="project" style={{background: `linear-gradient(0deg, ${primaryColor}, ${secondaryColor})`}}>
			<div className="project__info">
				<h3 className="project__date">{dateString}</h3>
				<h2 className="project__name">{name}</h2>
			</div>
			<button className="project__button">Click Here</button>
		</div>
	);
}

export default Project;