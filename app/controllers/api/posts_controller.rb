class Api::PostsController < ApplicationController
  def create
  end

  def update
  end

  def show
  end

  def index

    # puts(params)

    if params[:user_id]
      user = User.find_by(username: params[:user_id])
      @posts = user.posts
    else
      @posts = []
    end




  end

  def destroy
  end

  private

  def post_params
      params.require(:chirp).permit(:description, :authorId)
  end

end
