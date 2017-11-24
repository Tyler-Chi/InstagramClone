class Api::PostsController < ApplicationController
  def create
  end

  def update
  end

  def show
  end

  def index
    # @posts =  Post.all




  end

  def destroy
  end

  private

  def post_params
      params.require(:chirp).permit(:description, :authorId)
  end

end
