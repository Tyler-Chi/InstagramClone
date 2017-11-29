json.extract! @user, :id, :username, :email, :image_url

json.numfollowing @user.followings.count

json.numfollowers @user.followers.count

json.fbcu !!@user.followers.find_by(id: current_user.id)
