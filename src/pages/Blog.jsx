import Header from "components/Header/Header";
import Section from "components/Section/Section";
import Footer from "components/Footer/Footer";
import PostContainer from "components/Blog/PostContainer/PostContainer";

import posts from "assets/data/blogPosts"

function Home(){
	return(
		<div className="home">
			<Header />
			<Section >
				<h1>Blog</h1>
				<h3 style={{fontWeight: 400, fontSize: '1em', color: '#999'}}>* Please note: this is temporary test data. They're not real blog posts.</h3>
				<PostContainer posts={posts}/>
			</Section>
			<Footer />
		</div>
	);
}

export default Home;