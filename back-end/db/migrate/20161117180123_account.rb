class Account < ActiveRecord::Migration[5.0]
   def change 
  create_table :account do |table| 
  table.string :username 
  table.string :email 
  table.string :password 
  table.string :password_hash
  table.string :api_key
  table.string :contributions 
  end
end
end
