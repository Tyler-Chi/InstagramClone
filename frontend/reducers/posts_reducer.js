import { RECEIVE_POSTS , RECEIVE_POST } from '../actions/post_actions';
import merge from 'lodash/merge';

export default( oldState = {}, action) => {


  Object.freeze(oldState);
  let newState = Object.assign({},oldState);





  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts

    case RECEIVE_POST:


      newState[action.post.id] = action.post

      return newState;

    default:
      return oldState;

  }
}
