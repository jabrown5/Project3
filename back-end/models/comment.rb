class Comment < ActiveRecord::Base 
<<<<<<< HEAD
(self.table_name = 'comment') 
 
=======
# (self.table_name = 'comment') we don’t need this bc it already knows
  self.table_name = 'comment'

>>>>>>> master
end