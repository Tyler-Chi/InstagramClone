export const fetchUserInfo = username => (
  $.ajax({
    url: `users/${username}`,
    method: 'GET',
    data: {username}
  })
)
