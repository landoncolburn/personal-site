import './JumpButton.css';

function JumpButton(props) {
  return (
    <button onClick={props.action} className="jump-button">
      {props.title}
    </button>
  );
}

export default JumpButton;
