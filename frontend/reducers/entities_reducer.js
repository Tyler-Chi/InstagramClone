import { combineReducers } from 'redux';
import  postsReducer from './posts_reducer';
import viewedReducer from './viewed_reducer';

export default combineReducers({
  posts: postsReducer,
  viewed: viewedReducer
})
