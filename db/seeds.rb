# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#
# class CreatePosts < ActiveRecord::Migration[5.1]
#   def change
#     create_table :posts do |t|
#
#       t.integer :authorId
#       t.string :img_url
#       t.string :description
#
#       t.timestamps
#     end
#   end
# end

User.destroy_all

User.create!(
  username: 'bobrules',
  email: 'bobrules@gmail.com',
  password: 'bobpassword',
  image_url: 'aoweijfaoweijf'
)

User.create!(
  username: 'tyler',
  email: 'itychi@gmail.com',
  password: 'tylerpassword',
  image_url: 'awefaw'
)

User.create!(
  id: 1,
  username: 'Maggie',
  email: 'maggie@gmail.com',
  password: 'maggiepassword',
  image_url: 'aoweijfaoweijf'
)
