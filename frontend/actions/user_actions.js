import * as UserUtil from '../util/users';

export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';

export const receiveUserInfo = userInfo => ({
  type: RECEIVE_USER_INFO,
  userInfo
})

export const fetchUserInfo = username => dispatch => (
  UserUtil.fetchUserInfo(username)
  .then( user => dispatch(receiveUserInfo(user)))
)

export const createFollow = followee_id => dispatch => (
  UserUtil.createFollow(followee_id)
    .then( user => dispatch(receiveUserInfo(user)))
)

export const destroyFollow = (follower_id, followee_id) => dispatch =>(
  UserUtil.destroyFollow(follower_id,followee_id)
    .then( user => dispatch(receiveUserInfo(user)))
)
