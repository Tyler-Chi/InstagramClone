export const getPosts = () => $.ajax({
  url: 'api/posts',
  method: 'GET'
})

export const createPost = post => (
  $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: {post}
  })
)

export const createLikePost = id => (
  $.ajax({
    url: 'api/likes',
    method: 'POST',
    data: { id }
  })
)

export const deleteLikePost = id => (
  $.ajax({
    url: `api/likes/${id}`,
    method: 'DELETE',
    data: { id }
  })
)

export const getProfilePosts = (username) => (
  $.ajax({
    url: `posts/${username}`,
    method: 'GET',
    data: {username}
  })
)
