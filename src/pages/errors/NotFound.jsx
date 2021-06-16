import './NotFound.css'

import { Link } from 'react-router-dom';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

function NotFound() {
	return (
		<div className='not__found'>
			<Header />
			<div className="content">
				<h1>404: Page not found</h1>
				<h2>Whoops! You seem to have gotten lost...</h2>
				<button onClick={() => {
					window.location.href = "https://landoncolburn.com/"
				}} className="home__button">Take me home!</button>
				<Link to="/contact/"><p>Or alternatively file a bug report if you believe this is a mistake...</p></Link>
			</div>
			<Footer />
		</div>
	);
}

export default NotFound;