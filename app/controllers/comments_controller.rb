class CommentsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    comment = Comment.new(comments_params)
    if comment.save
      render json: { comment: comment }
    else
      render json: { error: comment.errors.messages }
    end
  end

  def index
    comments = Comment.where(article_id: params[:article_id])
    render json: { comments: comments }
  end

  def comments_params
    params.require(:comment).permit(:commenter, :body, :article_id)
  end
end
