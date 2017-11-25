import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import {login,signup,logout} from './actions/session_actions';
import configureStore from './store/store';
import { fetchPosts , createPost } from './actions/post_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');


  window.login = login;
  window.signup = signup;
  window.logout = logout;

  let preloadedState = undefined;


  if (window.currentUser){
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    }
  }



  const store = configureStore(preloadedState);

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.fetchPosts = () => dispatch(fetchPosts());
    window.logout = logout;
    window.createPost = post => dispatch(createPost(post));

  ReactDOM.render(<Root store={store} />, root);
});
