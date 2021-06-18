import Header from "components/Header/Header";
import Section from "components/Section/Section";
import Footer from "components/Footer/Footer";

import ContactForm from "components/Contact/ContactForm/ContactForm";

function Home(){
	return(
		<div className="home">
			<Header />
			<Section>
				<h1>Contact Me</h1>
				<p>Looking for something specific? Feel free to drop me a line using the form below or any of my socials. I am always happy to hear from you!</p>
				<ContactForm />
			</Section>
			<Footer />
		</div>
	);
}

export default Home;