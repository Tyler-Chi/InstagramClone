class Api::CommentsController < ApplicationController
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

      puts('the create params are...')
      puts(params)

      @comment = Comment.new
      @comment.writer_id = current_user.id
      @comment.post_id = params[:id]
      @comment.body = params[:body]

      if @comment.save
        @post = @comment.parent_post
        render 'api/posts/show'
      else
        render json: @comment.errors.full_messages, status: 401
      end
  end

  def destroy
  end
end
