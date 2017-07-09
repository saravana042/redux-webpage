import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import PostsIndex from './posts_index';

export default class Table extends Component {
  render() {
    return (
		<div>
			<Header />
				<div className="container middle-cnt">
					<PostsIndex />
				</div>
			
		</div>
    );
  }
}
