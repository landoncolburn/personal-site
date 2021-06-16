import { createRef } from 'react';

import Header from "components/Header/Header";
import Hero from "components/Hero/Hero";
import Section from "components/Section/Section";
import Footer from "components/Footer/Footer";

function Home(){

	const page = createRef();

	const CTAButtonAction = () => {
		console.log(page.current.offsetTop)
		window.scrollTo({ top: page.current.offsetTop-150, behavior: 'smooth' })
	}

	return(
		<div className="home">
			<Header />
			<Hero action={CTAButtonAction}/>
			<Section refHook={page}>
				<h1>Coming soon!</h1>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad sed magnam quisquam iure aperiam quas error incidunt dicta. Ratione iste praesentium dicta sapiente repellat atque esse. Repudiandae temporibus saepe expedita laborum est veritatis consectetur eos inventore explicabo in earum, illo ex rerum? Dicta autem consequatur repudiandae veritatis illo? Enim praesentium veniam animi error ratione obcaecati perspiciatis recusandae eum odio facere, ullam assumenda minus accusantium dolorem repellat vero. Possimus ab omnis atque quibusdam unde sequi incidunt. Soluta numquam labore assumenda repudiandae ratione. Id eaque excepturi totam officia quos rem sed accusantium eum eius quisquam, quis, ea commodi consectetur eos. Ratione repudiandae delectus explicabo voluptas atque earum dolor autem obcaecati eligendi nesciunt, quis aliquam, blanditiis, exercitationem tempora distinctio saepe voluptatem deleniti dolorum eius. Fugit tempora doloribus sunt in doloremque incidunt hic voluptatum dolorum blanditiis eaque? Dolorem ratione praesentium excepturi libero debitis illo perferendis laborum voluptatem et commodi quo nemo modi, voluptates autem quam maiores amet id recusandae vel non. Quas sit minus sequi. Pariatur tenetur aperiam excepturi. Sed a neque, laborum cumque libero quidem? Quia ipsum incidunt sunt odio nobis molestiae iste rem minima vitae esse, cupiditate commodi, sit aut repellat quibusdam, id consectetur animi nesciunt? Modi accusantium culpa illo dignissimos enim.</p>
			</Section>
			<Footer />
		</div>
	);
}

export default Home;