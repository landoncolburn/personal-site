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
				<ContactForm />
			</Section>
			<Footer />
		</div>
	);
}

export default Home;