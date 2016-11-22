class CommentController < ApplicationController

  get '/' do
    p session
    Comment.all.to_json

    # @model = Blog.all
    # @model.to_json
  end

  get '/:id' do
    @id = params[:id]
    Comment.find(@id).to_json

    # @model = Blog.find(params[:id])
    # @model.to_json
  end

  post '/' do
    @model = Comment.new
    @model.comment  = params[:comment]
    @model.publicly_accessible = params[:publicly_accessible]
    @model.cleanliness      = params[:cleanliness]
    @model.family_friendly  = params[:family_friendly]
    @model.gender           = params[:gender]
    @model.user_submission  = params[:user_submission]
    @model.date  = params[:date]
    @model.pictures  = params[:pictures]
    @model.tags  = params[:tags]
    # @model.foreign_key  = params[:foreign_key]
    @model.restroom_id = params[:restroom_id]

    @model.save
    @model.to_json
  end

  patch '/:id' do

    @id = params[:id]

    @comment  = params[:comment]
    @publicly_accessible = params[:publicly_accessible]
    @cleanliness      = params[:cleanliness]
    @family_friendly  = params[:family_friendly]
    @gender           = params[:gender]
    @user_submission  = params[:user_submission]
    @date       = params[:date]
    @pictures   = params[:pictures]
    @tags       = params[:tags]
    # @foreign_key= params[:foreign_key]
    @restroom_id= params[:restroom_id]

    @new_row = Comment.find(@id)
    @new_row.comment  = @comment
    @new_row.publicly_accessible  = @publicly_accessible
    @new_row.cleanliness      = @cleanliness
    @new_row.family_friendly  = @family_friendly
    @new_row.gender           = @gender
    @new_row.user_submission  = @user_submission
    @new_row.date      = @date
    @new_row.pictures  = @pictures
    @new_row.tags         = @tabs
    # @new_row.foreign_key  = @foreign_key
    @new_row.restroom_id  = @restroom_id

    @new_row.save
    @new_row.to_json
  end

  delete '/:id' do
    @id = params[:id]
    @model = Comment.find(@id)
    @model.destroy
    "You've deleted this comment."
  end

end