import './PaginationController.css';

import Dot from './Dot';

function PaginationController(props) {
	
	return (
		<div className='pagination__controller'>
			{props.link.map((link, ic)=>(
				<Dot key={ic} ic={ic} index={props.index} setIndex={props.setIndex} />
			))}
		</div>
	);
}

export default PaginationController;