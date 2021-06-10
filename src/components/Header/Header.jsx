import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
  return (
    <div className={props.background !== 'false' ? 'header header__wBG' : 'header'}>
      <div className="header__right">
        <ul className="header__navlinks">
          <Link to="/"><li>Home</li></Link>
          <Link to="/about/"><li>About</li></Link>
          <Link to="/projects/"><li>Projects</li></Link>
          <Link to="/blog/"><li>Blog</li></Link>
          <Link to="/contact/"><li>Contact</li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
