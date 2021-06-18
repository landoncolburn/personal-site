import 'components/Blog/Blog.css'

import { useParams, Link } from "react-router-dom";

import Header from "components/Header/Header";
import Section from "components/Section/Section";
import Footer from "components/Footer/Footer";
import Tag from "components/Blog/Tag/Tag";

// TODO: Remove temp. json object as placeholder for future API call
import posts from 'assets/data/blogPosts.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function BlogPost(){

	const params = useParams();

	const post = posts[params.slug]

	return(
		<div className="blog__post">
			<Header />
			<Section >
				<Link className="back__to__blogs__button" to="/blog/"><h4><FontAwesomeIcon icon={faArrowLeft} /> All Blog Posts</h4></Link>
				<div>
					{(post.tags).map((name, i) => {return(<Tag key={i} name={name}/>);})}
				</div>
				<h1>{post.title}</h1>
				<h3>{post.author} · {post.date} · {post.length} min read</h3>
				<p>{post.content}</p>
				<p>{post.content}</p>
				<p>{post.content}</p>
				<p>{post.content}</p>
			</Section>
			<Footer />
		</div>
	);
}

export default BlogPost;