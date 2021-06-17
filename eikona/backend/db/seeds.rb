# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create([{name: 'heather', email: 'osxgirl@mac.com' }])
user = User.create([{name: 'petal', email: 'heather@petalsnap.com' }])
user = User.create([{name: 'Matisse', email: 'matisse@mac.com'}])

message = Message.create([{ detail: 'जी शुक्रिया ❤️', user_id:1}])
message = Message.create([{ detail: 'thank you ❤️', user_id:2}])
message = Message.create([{ detail: 'gracias ❤️', user_id:3}])
message = Message.create([{ detail: 'danke ❤️', user_id:4}])
message = Message.create([{ detail: 'merci ❤️', user_id:5}])
