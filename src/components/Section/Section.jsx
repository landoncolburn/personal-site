import "./Section.css";

function Section(props) {
	return(
		<div ref={props.refHook} className="section">
			{props.children}
		</div>
	);
}

export default Section;