class Api::PostsController < ApplicationController
  def create
    @post = current_user.posts.new(post_params)
    if @post.save
      render json: @post
    else
      render @post.errors.full_messages, status: 401
    end
  end

  def update
  end

  def show
  end

  def index


    cloud_name = ENV['CLOUD_NAME']
    upload_preset = Figaro.env.UPLOAD_PRESET
    puts "API KEYS: #{cloud_name} #{upload_preset}"

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
  end

end
