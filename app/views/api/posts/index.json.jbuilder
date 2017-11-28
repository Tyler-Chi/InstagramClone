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

    # json.comments post.comments.each do |comment|
    #   json.set! comment.id do
    #     json.body comment.body
    #     json.writer comment.writer.username
    #   end
    #   end
    # end

    json.comments post.comments.each do |comment|

        json.id comment.id
        json.body comment.body
        json.writer comment.writer.username

    end


    json.numcomments post.comments.count



  end



end
