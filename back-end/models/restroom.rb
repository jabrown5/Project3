class Restroom < ActiveRecord::Base 
<<<<<<< HEAD
(self.table_name = 'restroom') 
 
=======
# (self.table_name = 'restroom') we don’t need this bc it already knows 
  self.table_name = 'restroom'

>>>>>>> master
end