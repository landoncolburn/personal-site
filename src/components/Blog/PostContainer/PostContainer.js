import './PostContainer.css';

import Post from '../Post/Post';

function PostContainer(props) {
	const posts = props.posts
	return (
		<div className="post__container">
			{posts.map(post=>(
				<Post post={post} />
			))}
		</div>
	)
}

export default PostContainer;