class ArticlesController < ApplicationController

  def index
    p params
  end

  def edit
  end

  def content    
    @content = Article.all
    
    render json: {data: @content}
  end


end
