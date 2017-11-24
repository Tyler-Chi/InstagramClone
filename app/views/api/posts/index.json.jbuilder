# json.array! @posts do |post|
#   json.extract! post, :id, :description, :authorId
# end
#
#
#

@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :description, :authorId, :img_url
    json.author do
      json.name post.author.username
    end
  end



end
