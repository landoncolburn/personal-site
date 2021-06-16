import './Hero.css';
import JumpButton from "components/JumpButton/JumpButton";

function Hero(props) {
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <div className="hero__inner-text">
          <h1>I am <strong>Landon Colburn.</strong></h1>
          <span>Computer Science Student. Ample experience with MERN/PERN stacks, object orientation &amp; functional programming paradigms, languages such as Javascript (Node.js and React), Python, C++, C#, Swift (iOS/macOS development and SwiftUI), Java, R, and other tools like PostgreSQL, MongoDB, *nix (any unix-like systems), Web servers, Networking, Arduino, and much more.</span>
        </div>
        <JumpButton action={props.action} title="See more" location="#"/>
      </div>
    </div>
  );
}

export default Hero;
