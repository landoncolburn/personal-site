import { Link } from 'react-router-dom';

import Header from "components/Header/Header";
import Section from "components/Section/Section";
import Footer from "components/Footer/Footer";

function Home(){
	return(
		<div className="home">
			<Header />
			<Section>
				<h1>About Me</h1>
				<p>Hi! My name is Landon. I'm a 19 year-old computer science student based out of Canada. I frequently design web apps and other websites using technologies like Node.js, React, Express, and Postgres. I also enjoy iOS/macOS development with Swift, game development with C++ or C# and embedded systems/IOT using technologies like Arduino. I have been doing software development for over 8 years, beginning with Java when I was close to 10 y/o. I have a collection of Swing/Java games made on a custom (very shoddy) game engine I wrote myself. I also tinker with networking equipment and home automation quite regularly.</p>
				<p>I do freelance work and odd jobs, I love joining projects and find myself spending many hours perfecting my craft. I thrive in team based enviroments but also have the organization and determination to do well on my own.</p>
				<p>If you're interested in working with me, (or giving me a job :P) feel free to contact me using my <Link to="/contact/"><span>Contact Form</span></Link></p>
			</Section>
			<Footer />
		</div>
	);
}

export default Home;