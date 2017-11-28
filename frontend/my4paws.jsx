import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import {login,signup,logout} from './actions/session_actions';
import configureStore from './store/store';
import { fetchPosts , createPost , likePost , unlikePost ,getProfilePosts, createComment , deleteComment } from './actions/post_actions';

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
    delete window.currentUser;
  }



  const store = configureStore(preloadedState);

    window.getState = store.getState;
    window.dispatch = store.dispatch;



    window.likePost = id => dispatch(likePost(id));
    window.unlikePost = id => dispatch(unlikePost(id));

    window.getProfilePosts = username => dispatch(getProfilePosts(username))

    window.createComment = (id,body) => dispatch(createComment(id,body))

    window.deleteComment = id => dispatch(deleteComment(id))

  ReactDOM.render(<Root store={store} />, root);
});
