import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';
import Header from './header';
import Footer from './footer';

class PostsShow extends Component {

	componentDidMount(){
		const { id } = this.props.match.params;
		this.props.fetchPost(id);
	}
	onDeleteClick(){
		const { id } = this.props.match.params;
		this.props.deletePost(id, () => {
			this.props.history.push('/');
		});
	}
	render(){
		const { post } = this.props;

		if(!post){
			return <div>Loading ... </div>;
		}

		return(
			<div>
          	<Header />
				<div className="container middle-cnt">
					<h3>Post Title: {post.title}</h3>
					<h6>Categories: {post.categories}</h6>
					<p>Post Content: {post.content}</p>

					<Link className="btn btn-primary" to="/">Back to Index</Link>
					<button 
					className="btn btn-danger delete-btn"
					onClick={this.onDeleteClick.bind(this)}
					>
						Delete Post
					</button>
				</div>
			
			</div>
		);
	}
}

function mapStateToProps({posts}, ownProps){
	return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);