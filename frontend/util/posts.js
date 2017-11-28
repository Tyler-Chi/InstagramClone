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

export const createComment = (id,body) => (
  $.ajax({
    url: 'api/comments',
    method: 'POST',
    data: {id, body}
  })
)

export const deleteComment = id => (
  $.ajax({
    url: `api/comments/${id}`,
    method: 'DELETE',
    data: {id}
  })
)

export const fetchAllPosts = () => (
  $.ajax({
    url: '/posts',
    method: 'GET'
  })
)
