class Restroom < ActiveRecord::Base 
# (self.table_name = 'restroom') we don’t need this bc it already knows 
  self.table_name = 'restrooms'

  has_many :restroom_comments #has many rows in the the restroom comments table
  has_many :comments, through: :restroom_comments
  	# looking at comments table, there are MANY comments,
  	# connections are made via the "restroomcomments" table
end


#@user = Account.find(params[:id])
#@user.comments 
# or...
#Comment.where(:account => params[:id])