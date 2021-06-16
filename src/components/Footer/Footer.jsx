import './Footer.css';

function Footer() {
  return (
    <div className="footer">
		<div className="footer-section">
			<a href="https://twitter.com/landoncolburn/" target="_blank" rel="noopener noreferrer">Twitter</a>
			<a href="https://github.com/landoncolburn/" target="_blank" rel="noopener noreferrer">GitHub</a>
			<a href="https://linkedin.com/in/landoncolburn/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
			<a href="https://landoncolburn.com/sitemap.xml" target="_blank" rel="noopener noreferrer">Sitemap</a>
		</div>
		<div className="footer-section">
			All rights reserved. <br />
			&copy; {(new Date()).getFullYear()} Landon Colburn
		</div>
    </div>
  );
}

export default Footer;
