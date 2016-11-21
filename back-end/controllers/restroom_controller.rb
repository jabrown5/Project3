class RestroomController < ApplicationController

  get '/' do
    # binding.pry
    Restroom.all.to_json
  end

  get '/:id' do
    @id = params[:id]
    Restroom.find(@id).to_json
  end

  # RENDERS ALL COMMENTS ASSOCIATED W/ A RESTROOM THAT HAS BEEN CALLED BY ID
  get '/:id/comments' do
    @res = Restroom.find(params[:id]).comments
    @res.to_json
  end

  post '/' do
    @model = Restroom.new
    @model.facility_name  = params[:facility_name]
    @model.address        = params[:address]
    @model.latitude       = params[:latitude]
    @model.longitude      = params[:longitude]
    @model.publicly_accessible = params[:publicly_accessible]
    @model.cleanliness      = params[:cleanliness]
    @model.family_friendly  = params[:family_friendly]
    @model.gender           = params[:gender]
    @model.user_submission  = params[:user_submission]

    @model.save
    @model.to_json
  end

  patch '/:id' do

    @id = params[:id]
    @facility_name  = params[:facility_name]
    @address        = params[:address]
    @latitude       = params[:latitude]
    @longitude      = params[:longitude]
    @publicly_accessible = params[:publicly_accessible]
    @cleanliness      = params[:cleanliness]
    @family_friendly  = params[:family_friendly]
    @gender           = params[:gender]
    @user_submission  = params[:user_submission]

    @new_row = Restroom.find(@id)
    @new_row.facility_name  = @facility_name
    @new_row.address        = @address
    @new_row.latitude       = @latitude
    @new_row.longitude      = @longitude
    @new_row.publicly_accessible = @publicly_accessible
    @new_row.cleanliness      = @cleanliness
    @new_row.family_friendly  = @family_friendly
    @new_row.gender           = @gender
    @new_row.user_submission  = @user_submission

    @new_row.save
    @new_row.to_json
  end

  delete '/:id' do
    @id = params[:id]
    @model = Restroom.find(@id)
    @model.destroy
    "You've deleted this potty posting."
  end

end