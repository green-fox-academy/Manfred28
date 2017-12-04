class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end

  def new
    @post = Post.new
  end

  def edit
    @post = Post.find(params[:id])
  end

  def create
    # params[:post][:title] = nil if params[:post][:title] == "" 
    @post = Post.create(post_params)
    if @post.save
      redirect_to posts_path and return
    end
    render "new"
  end

  def update 
    @post = Post.find(params[:id])
    if @post.update(post_params)
      redirect_to posts_path and return
    end
    render "edit"
  end

  def destroy
    @post = Post.find(params[:id])
    @post.delete
    redirect_to posts_path
  end

  private
    def post_params
      params.require("post").permit("title", "url")
    end
end
