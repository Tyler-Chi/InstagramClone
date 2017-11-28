class Api::LikesController < ApplicationController
  def index
  end

  def create
    @like = Like.new
    @like.user_id = current_user.id
    @like.post_id = params[:id]

    if @like.save
      @post = @like.post
      render 'api/posts/show'
    else
      render json: @like.errors.full_messages, status: 401
    end

  end

  def show
  end

  def edit
  end

  def update
  end

  def new
  end



  def destroy
    puts(params)
    @like = Like.find_by(user_id: current_user.id, post_id: params[:id])
    @like.destroy
    @post = @like.post

    render 'api/posts/show'

  end
end
