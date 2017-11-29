import * as PostApiUtil from '../util/posts';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const CURRENTLY_LOADING = 'CURRENTLY_LOADING';
import { clearErrors, receiveErrors } from './session_actions';


export const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});


export const currentlyLoading = () => ({
  type: CURRENTLY_LOADING
})


export const fetchPosts = () => dispatch => {
  dispatch(currentlyLoading());
  PostApiUtil.getPosts().then(posts => dispatch(receivePosts(posts)))
}

export const createPost = post => dispatch => (
  PostApiUtil.createPost(post)
  .then(post => {dispatch(receivePost(post)); dispatch(clearErrors())},
  err => dispatch(receiveErrors(err.responseJSON)))
)

export const likePost = id => dispatch => {
  // dispatch(currentlyLoading());
  PostApiUtil.createLikePost(id)
    .then(post => dispatch(receivePost(post)))
}

export const unlikePost = id => dispatch => {
  // dispatch(currentlyLoading());
  PostApiUtil.deleteLikePost(id)
    .then(post => dispatch(receivePost(post)))
}

export const getProfilePosts = username => dispatch => {
  dispatch(currentlyLoading());
  PostApiUtil.getProfilePosts(username)
    .then(posts => dispatch(receivePosts(posts)))
}

export const createComment = (id, body) => dispatch => {
  dispatch(currentlyLoading());
  PostApiUtil.createComment(id,body)
    .then(post => dispatch(receivePost(post)))
}

export const deleteComment = id => dispatch => {
  dispatch(currentlyLoading());
  PostApiUtil.deleteComment(id)
    .then(post => dispatch(receivePost(post)))
}

export const fetchAllPosts = () => dispatch => {
  dispatch(currentlyLoading());
  PostApiUtil.fetchAllPosts().then(posts => dispatch(receivePosts(posts)))
}
