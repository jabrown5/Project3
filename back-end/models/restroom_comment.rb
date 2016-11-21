class RestroomComment < ActiveRecord::Base 
# (self.table_name = 'restroom') we don’t need this bc it already knows 
  self.table_name = 'restroom_comments'

  # this is the table that links "restrooms" and "comments"
    belongs_to :comments
  	belongs_to :restrooms

end