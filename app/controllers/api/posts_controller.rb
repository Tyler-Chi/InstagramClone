class Api::PostsController < ApplicationController

  def create

    @post = Post.new(post_params)
    if @post.save
      render :show
    else
      render @post.errors
    end
  end

  def update
  end

  def show

    puts('the params are')
    puts(params)

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
      params.require(:post).permit(:description, :authorId, :img_url)
      # params.permit(:description, :authorId, :img_url)
  end

end
