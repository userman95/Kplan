class ArticlesController < ApplicationController
  def index
    p params
  end

  def edit; end

  def content
    @data = Article.all
    p params
    render json: { data: @data }
  end

  def show
    @article = Article.where(id: params[:id])
    render json: { data: @article }
  end
end
