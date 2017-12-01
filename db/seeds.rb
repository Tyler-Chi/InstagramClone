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

user1 = User.create!( username: 'Artemis', email: 'test@gmail.com',  password: 'testpassword', image_url: 'aoweijfaoweijf')
user2 = User.create!( username: 'Tyler', email: 'itychi@gmail.com', password: 'tylerpassword', image_url: 'aowiejfaowiejf')
user3 = User.create!( username: 'Lily', email: 'maggie@gmail.com', password: 'maggiepassword' ,image_url: 'lonerimage')
user4 = User.create!( username: 'George', email: 'george@gmail.com', password: 'georgepassword' ,image_url: 'lonerimage')
user5 = User.create!( username: 'Neda', email: 'neda@gmail.com', password: 'nedapassword' ,image_url: 'lonerimage')
user6 = User.create!( username: 'Momo', email: 'momo@gmail.com', password: 'momopassword' ,image_url: 'lonerimage')




post1 = Post.create!(description: 'Walk in the park',img_url: 'https://c.pxhere.com/photos/81/db/autumn_forest_autumn_forest_trees_leaves_sunbeam_nature_sunlight-967621.jpg!d', authorId: user1.id)



post2 = Post.create!(description: 'Yangmingshan Taipei Chinese Pavilion!',img_url: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Yangmingshan_Taipei_Chinese_Pavilion.jpg', authorId: user2.id)


post3 = Post.create!(description: 'City of Stars',img_url: 'https://static.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg', authorId: user3.id)


post4 = Post.create!(description: 'So this is where bread comes from',img_url: 'https://get.pxhere.com/photo/landscape-nature-grass-branch-light-sky-sun-fog-sunrise-sunset-mist-field-grain-sunlight-morning-dawn-summer-dusk-evening-harvest-autumn-fields-mood-arable-atmospheric-phenomenon-grass-family-642150.jpg', authorId: user4.id)


post5 = Post.create!(description: 'Beauty is everywhere',img_url: 'https://static.pexels.com/photos/8486/water-rain-raindrops-drops.jpg', authorId: user5.id)




post10 = Post.create!(description: 'Wet Road',img_url: 'https://static.pexels.com/photos/39811/pexels-photo-39811.jpeg', authorId: user6.id)


post11 = Post.create!(description: 'Taipei 101',img_url: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Taipei_101_2008_NewYear_Firework.jpg', authorId: user1.id)


post12 = Post.create!(description: 'Sunset',img_url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Burning_Yellow_Sunset.jpg', authorId: user2.id)

post13 = Post.create!(description: 'Taiwan', img_url: 'http://res.cloudinary.com/deaiyjjnf/image/upload/v1512081460/orsdiipmsn7e8vargxhg.jpg', authorId: user3.id)


post14 = Post.create!(description: 'Captivated', img_url: 'https://images.pexels.com/photos/159020/sunset-sky-afterglow-evening-sky-159020.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb', authorId: user4.id)

post15 = Post.create!(description: 'Flowers', img_url: 'https://static.pexels.com/photos/87452/flowers-background-butterflies-beautiful-87452.jpeg', authorId: user5.id)

post16 = Post.create!(description: 'Brilliant Sunset', img_url: 'http://maxpixel.freegreatpicture.com/static/photo/2x/Colors-Dusk-Turkey-Clouds-Sky-Beautiful-Sunset-1985086.jpg', authorId: user6.id)


post18 = Post.create!(description: 'So cold but so good!', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6xOBJiOyYKKtlz7VuHtw7uhZvmhMVkwExV3h--YH6WynPQFj', authorId: user3.id)


post19 = Post.create!(description: 'Fire in the sky', img_url: 'https://c1.staticflickr.com/8/7512/16172098986_6df4e49a5f_b.jpg', authorId: user4.id)



post21 = Post.create!(description: 'Light up the sky', img_url: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/1_epcot_illuminations_2010.jpg', authorId: user1.id)




post22 = Post.create!(description: 'After a 10 mile hike', img_url: 'http://maxpixel.freegreatpicture.com/static/photo/2x/Mountain-Sky-Clouds-Miscanthus-A-Surname-Taiwan-1117008.jpg', authorId: user4.id)

post23 = Post.create!(description: 'Stalking its prey', img_url: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg', authorId: user6.id)

post24 = Post.create!(description: 'Finding something to chew on...', img_url: 'https://static.pexels.com/photos/145994/pexels-photo-145994.jpeg', authorId: user1.id)

post25 = Post.create!(description: 'Lights on the water', img_url: 'https://get.pxhere.com/photo/water-light-night-atmosphere-river-swim-love-evening-orange-pile-reflection-red-collection-color-romance-darkness-yellow-lighting-heat-long-exposure-festival-lights-candles-design-symmetry-mood-shape-candlelight-many-ulm-festival-of-lights-agglomeration-floating-candles-lights-serenade-1018806.jpg', authorId: user3.id)

post26 = Post.create!(description: 'Festival of lights', img_url: 'https://static.pexels.com/photos/145994/pexels-photo-145994.jpeg', authorId: user4.id)

post27 = Post.create!(description: 'Flight over Hawaii', img_url: 'https://static.pexels.com/photos/221385/pexels-photo-221385.jpeg', authorId: user5.id)







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
