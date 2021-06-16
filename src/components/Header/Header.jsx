import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'

function Header(props) {

  const [barsOpen, setBarsOpen] = useState(true);

  return (
    <div className={`${props.background !== 'false' ? 'header header__wBG' : 'header'}`}>
      <div className="header__right">
        <button onClick={()=>{
          setBarsOpen(!barsOpen);
        }} className="menu">
          <FontAwesomeIcon className="icon" size="2x" icon={faBars}/>
        </button>
        <ul className={`header__navlinks ${barsOpen ? "visible" :  ``}`}>
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
