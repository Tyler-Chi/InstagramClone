import { getPosts } from '../util/posts';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchPosts = () => dispatch => (
  getPosts().then(posts => dispatch(receivePosts(posts)))
)
