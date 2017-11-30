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
Follow.destroy_all
Comment.destroy_all

user1 = User.create!( username: 'testuser', email: 'test@gmail.com',  password: 'testpassword', image_url: 'aoweijfaoweijf')
user2 = User.create!( username: 'bobrules', email: 'bobrules@gmail.com', password: 'bobpassword', image_url: 'aowiejfaowiejf')
user3 = User.create!( username: 'loner', email: 'loner@loner.com', password: 'lonerpassword' ,image_url: 'lonerimage')



post1 = Post.create!(description: 'testpost',img_url: 'https://c.pxhere.com/photos/81/db/autumn_forest_autumn_forest_trees_leaves_sunbeam_nature_sunlight-967621.jpg!d', authorId: user1.id)


post2 = Post.create!(description: 'pupper',img_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Yangmingshan_Taipei_Chinese_Pavilion.jpg', authorId: user1.id)


post3 = Post.create!(description: 'stars',img_url: 'https://static.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg', authorId: user3.id)


post4 = Post.create!(description: 'wheat',img_url: 'https://get.pxhere.com/photo/landscape-nature-grass-branch-light-sky-sun-fog-sunrise-sunset-mist-field-grain-sunlight-morning-dawn-summer-dusk-evening-harvest-autumn-fields-mood-arable-atmospheric-phenomenon-grass-family-642150.jpg', authorId: user3.id)


post5 = Post.create!(description: 'droplets',img_url: 'https://static.pexels.com/photos/8486/water-rain-raindrops-drops.jpg', authorId: user3.id)




post10 = Post.create!(description: 'wetroad',img_url: 'https://static.pexels.com/photos/39811/pexels-photo-39811.jpeg', authorId: user2.id)


post11 = Post.create!(description: 'taipei101',img_url: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Taipei_101_2008_NewYear_Firework.jpg', authorId: user2.id)


post12 = Post.create!(description: 'sunset',img_url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Burning_Yellow_Sunset.jpg', authorId: user2.id)

post13 = Post.create!(description: 'test?', img_url: 'http://res.cloudinary.com/deaiyjjnf/image/upload/v1512081460/orsdiipmsn7e8vargxhg.jpg', authorId: user2.id)


post14 = Post.create!(description: 'test2?', img_url: 'http://res.cloudinary.com/deaiyjjnf/image/upload/a_ignore/v1512081460/orsdiipmsn7e8vargxhg.jpg', authorId: user2.id)


follow1 = Follow.create!( follower_id: user1.id , followee_id: user2.id)
follow2 = Follow.create!( follower_id: user1.id, followee_id: user3.id)




# User.create!!(
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
