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

export const destroyFollow = (followee_id)=>(
  $.ajax({
    url: `follows/${followee_id}`,
    data: {followee_id},
    method: 'DELETE'
  })
)
