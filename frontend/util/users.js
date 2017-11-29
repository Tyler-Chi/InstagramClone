export const fetchUserInfo = username => (
  $.ajax({
    url: `users/${username}`,
    method: 'GET',
    data: {username}
  })
)

export const createFollow = followee_id => (
  $.ajax({
    url: '/follows',
    method: 'POST',
    data: {followee_id}
  })
)

export const destroyFollow = (follower_id,followee_id)=>(
  $.ajax({
    url: `follows/${follower_id}`,
    data: {follower_id, followee_id}
  })
)
