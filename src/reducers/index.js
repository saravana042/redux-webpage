import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';
import PghContent from './reducer_content';

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer,
  pgcontents:PghContent
});

export default rootReducer;
