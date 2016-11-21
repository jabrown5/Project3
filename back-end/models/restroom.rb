class Restroom < ActiveRecord::Base 
# (self.table_name = 'restroom') we don’t need this bc it already knows 
  self.table_name = 'restrooms'
  has_many :comments
end


#@user = Account.find(params[:id])
#@user.comments 
# or...
#Comment.where(:account => params[:id])