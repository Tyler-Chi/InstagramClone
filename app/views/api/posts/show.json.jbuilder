json.extract! @post, :id, :description, :authorId, :img_url

json.likes @post.likes.count

json.lbcu !!@post.likes.find_by(user_id: current_user.id)

json.author do
  json.name @post.author.username
end


json.comments @post.comments.each do |comment|

    json.id comment.id
    json.body comment.body
    json.writer comment.writer.username

end

# json.comments @post.comments
