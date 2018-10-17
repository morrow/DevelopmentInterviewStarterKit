# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Attempt to seed with API if API_KEY is in ENV
if ENV['SALESLOFT_API_KEY']
  CreatePeopleJob.perform_now(ENV['SALESLOFT_API_KEY'])
end