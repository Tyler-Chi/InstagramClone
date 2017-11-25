import { RECEIVE_POSTS , RECEIVE_POST } from '../actions/post_actions';


export default( oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts

    case RECEIVE_POST:
      const newPost = {[action.post.id]: action.post}
      return merge({},oldState, newPost)

    default:
      return oldState;

  }
}
