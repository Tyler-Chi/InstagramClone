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
