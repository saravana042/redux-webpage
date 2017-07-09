import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import PG_Content from './components/pg_content';
import Table from './components/table';
import Chart from './components/chart';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
	<BrowserRouter>
		<div>
			<Switch>
				<Route path="/paragraph" component={PG_Content} />
				<Route path="/chart" component={Chart} />
				<Route path="/table" component={Table} />
				<Route path="/posts/new" component={PostsNew} />
				<Route path="/posts/:id" component={PostsShow} />
				<Route path="/" component={App} />
			</Switch>
		</div>
	</BrowserRouter>
  </Provider>
  , document.querySelector('.wrapper'));
