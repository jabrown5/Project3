class Comment < ActiveRecord::Migration[5.0]
  def change
    create_table :comment do |table|
      table.string :comment
      table.string :publicly_accessible
      table.string :cleanliness
      table.string :family_friendly
      table.string :gender
      table.string :user_submission
      table.string :date
      table.string :pictures
      table.string :tags
      table.string :foreign_key
    end
  end
end