import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {

  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    return _.map(this.props.posts, post => {
      return(
        <tr key={post.id}>
          <td>
            <Link to={`/posts/${post.id}`}>
            {post.id}
            </Link>
          </td>
          <td>
            <Link to={`/posts/${post.id}`}>
            {post.title}
            </Link>
          </td>
          <td>
            <Link to={`/posts/${post.id}`}>
            {post.categories}
            </Link>
          </td>
          <td>
            <Link to={`/posts/${post.id}`}>
            {post.content}
            </Link>
          </td>
        </tr>
      );
    });
  }

  render() {
    //console.log(this.props.posts);
    return (
      <div>
        <div className="Add-post">
          <Link className="btn btn-primary" to="/posts/new">
          Add a Posts
          </Link>
        </div>

         <table className="table table-hover table-bordered">
            <thead>
               <tr>
                  <th>ID</th>
                  <th>TITLE</th>
                  <th>CATEGORIES</th>
                  <th>CONTENT</th>
               </tr>
           </thead>
           <tbody>
             {this.renderPosts()}
           </tbody>
         </table>

      </div>
    );
  }
}

function mapStateToProps(state){
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);