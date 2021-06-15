import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

function ProjectCarouselController(props) {
	const isLeft = (props.direction !== 'right')
	return (
		<button onClick={props.action} className={`carousel__controller ${isLeft ? "left" : "right"}`}>
				<FontAwesomeIcon icon={isLeft ? faArrowLeft : faArrowRight} size="2x" />
		</button>
	);
}

export default ProjectCarouselController;