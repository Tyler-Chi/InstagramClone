class PostsController < ApplicationController
  def index



  end

  def show
    puts('my params are')
    puts(params)

    @user = User.find_by(username: params[:username])

    puts('i think the user is....')
    puts(@user.username)
    puts('i think the user id is...')
    puts(@user.id)

    @posts = @user.posts

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
