import './Post.css';

function Post(props) {
	const { title, date, author, content, length, color } = props.post;
	const dateObj = new Date(date);
	const primaryColor = `hsla(${color[0]}, ${color[1]}%, ${color[2]}%, ${color[3]})`;
	const secondaryColor = `hsla(${(color[0]+20)%360}, ${color[1]}%, ${color[2]}%, ${color[3]})`;
	return(
		<div className="post">
			<div style={{background: `linear-gradient(45deg, ${primaryColor}, ${secondaryColor})`}} className="post__image"></div>
			<div className="post__info">
				<span className="post__date">{dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
				<span className="post__length"> · {length} minute read</span>
				<h3 className="post__title">{title}</h3>
				<p className="post__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex iusto sunt fugiat modi adipisci esse neque ullam nemo totam odit?</p>
			</div>
		</div>
	);
}

export default Post;