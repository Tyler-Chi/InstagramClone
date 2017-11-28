# json.array! @posts do |post|
#   json.extract! post, :id, :description, :authorId
# end
#
#
#

@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :description, :authorId, :img_url

    json.likes post.likes.count

    json.lbcu !!post.likes.find_by(user_id: current_user.id)

    json.author do
      json.name post.author.username
    end

    json.comments post.comments

    json.numcomments post.comments.count
  end



end
