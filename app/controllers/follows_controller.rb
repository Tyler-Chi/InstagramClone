class FollowsController < ApplicationController
  def index
  end

  def show
  end

  def edit
  end

  def update
  end

  def new
  end

  def create
    @follow = Follow.new
    @follow.follower_id = current_user.id
    @follow.followee_id = params[:followee_id]

    if @follow.save
      @user = @follow.followee
      render 'users/show'
    else
      render json: @follow.errors.full_messages, status: 401
    end

  end

  def destroy
    # right now i have access to followee_id in the data

    @follow = Follow.find_by(follower_id: current_user.id, followee_id: params[:followee_id])

    @follow.destroy

    @user = @follow.followee
    render 'users/show'

  end
end
