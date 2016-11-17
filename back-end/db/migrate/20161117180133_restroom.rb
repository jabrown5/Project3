class Restroom < ActiveRecord::Migration[5.0]
  def change
   def change 
  create_table :restroom do |table| 
  table.string :facility_name 
  table.string :address
  table.string :latitude 
  table.string :longitude
  table.string :publicly_accessible
  table.string :cleanliness
  table.string :family_friendly
  table.string :gender
  table.string :user_submission
  end
  end
end
