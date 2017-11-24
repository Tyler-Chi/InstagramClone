import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import {login,signup,logout} from './actions/session_actions';
import configureStore from './store/store';
import { fetchPosts } from './actions/post_actions';

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
    window.fetchPosts = fetchPosts;
      window.logout = logout;

  ReactDOM.render(<Root store={store} />, root);
});
