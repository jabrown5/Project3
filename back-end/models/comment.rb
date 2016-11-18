class Comment < ActiveRecord::Base 
# (self.table_name = 'comment') we don’t need this bc it already knows
  self.table_name = 'comment'

end