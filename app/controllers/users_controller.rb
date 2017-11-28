class UsersController < ApplicationController
  def index
  end

  def show
    @user = User.find_by(username: params[:username])

  end

  def edit
  end

  def update
  end

  def new
  end

  def create
  end

  def destroy
  end
end
