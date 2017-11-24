class Api::PostsController < ApplicationController
  def create
  end

  def update
  end

  def show
  end

  def index

    @user = current_user

    @posts = @user.posts




  end

  def destroy
  end

  private

  def post_params
      params.require(:post).permit(:description, :authorId)
  end

end
