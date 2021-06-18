import './Tag.css'

function Tag(props) {
	return (
		<span className="tag">{props.name}</span>
	);
}

export default Tag;