import { ReactComponent as Logo } from 'assets/images/logo.svg';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Logo className="header__logo"/>
      </div>
      <div className="header__right">
        <ul className="header__navlinks">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
