class Account < ActiveRecord::Base 
<<<<<<< HEAD
(self.table_name = 'account') 
=======
# (self.table_name = 'account') we don’t need this bc it already knows
  self.table_name = 'account'

>>>>>>> master
end