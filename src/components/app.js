import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Table from './table';
import Chart from './chart';
import PostsIndex from './posts_index';
import PostsNew from './posts_new';
import PG_Content from './pg_content';

export default class App extends Component {
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
