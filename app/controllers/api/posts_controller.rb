class Api::PostsController < ApplicationController
  def create
  end

  def update
  end

  def show
  end

  def index

    @user = current_user

    @posts = []
    @posts.concat(@user.posts)

    following = current_user.is_following
    following.each do |followed|
      @posts.concat(followed.posts)
    end









  end

  def destroy
  end

  private

  def post_params
      params.require(:post).permit(:description, :authorId)
  end

end
