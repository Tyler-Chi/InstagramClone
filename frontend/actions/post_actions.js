import * as PostApiUtil from '../util/posts';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';


export const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchPosts = () => dispatch => (
  PostApiUtil.getPosts().then(posts => dispatch(receivePosts(posts)))
)

export const createPost = post => dispatch => (
  PostApiUtil.createPost(post).then(post => dispatch(receivePost(post)))
)
