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
Post.destroy_all

user1 = User.create( username: 'Maggie', email: 'maggie@gmail.com',  password: 'maggiepassword', image_url: 'aoweijfaoweijf')
user2 = User.create( username: 'bobrules', email: 'bobrules@gmail.com', password: 'bobpassword', image_url: 'aowiejfaowiejf')

post1 = Post.create(description: 'doggo',img_url: 'awefa', authorId: user1.id)
post2 = Post.create(description: 'pupper',img_url: 'awefa', authorId: user1.id)
post3 = Post.create(description: 'bigpupper',img_url: 'awefa', authorId: user1.id)
post4 = Post.create(description: 'biggerpupper',img_url: 'awefa', authorId: user1.id)
post5 = Post.create(description: 'smol_pupper',img_url: 'awefa', authorId: user1.id)

post10 = Post.create(description: 'testerpupper',img_url: 'awefa', authorId: user2.id)



# User.create!(
#   username: 'bobrules',
#   email: 'bobrules@gmail.com',
#   password: 'bobpassword',
#   image_url: 'aoweijfaoweijf'
# )
#
# User.create!(
#   username: 'tyler',
#   email: 'itychi@gmail.com',
#   password: 'tylerpassword',
#   image_url: 'awefaw'
# )
# /
