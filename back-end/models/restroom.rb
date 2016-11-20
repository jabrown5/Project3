class Restroom < ActiveRecord::Base 
# (self.table_name = 'restroom') we don’t need this bc it already knows 
  self.table_name = 'restrooms'

  has_many :restroomcomments #has many rows in the the restroom comments table
  has_many :comments, through: :restroomcomments
  	# looking at comments table, there are MANY comments,
  	# connections are made via the "restroomcomments" table
end