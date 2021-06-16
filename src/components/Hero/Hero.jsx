import './Hero.css';
import JumpButton from "components/JumpButton/JumpButton";

function Hero(props) {
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <div className="hero__inner-text">
          <h1>I am <strong>Landon Colburn.</strong></h1>
          <span>Full-stack and embedded systems developer. Specializing in Computer Engineering, Machine Learning, UX/UI, and Networking.</span>
        </div>
        <JumpButton action={props.action} title="See more" location="#"/>
      </div>
    </div>
  );
}

export default Hero;
