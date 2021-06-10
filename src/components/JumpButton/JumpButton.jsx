import './JumpButton.css';

function JumpButton(props) {
  return (
    <button className="jump-button">
		{props.title}
	</button>
  );
}

export default JumpButton;
