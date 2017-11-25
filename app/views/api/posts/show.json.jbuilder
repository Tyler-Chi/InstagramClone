json.extract! post, :id, :description, :authorId, :img_url

json.author do
  json.name post.author.username
end
