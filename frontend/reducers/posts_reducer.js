import { RECEIVE_POSTS } from '../actions/post_actions';


export default( oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts


    default:
      return oldState;

  }
}
