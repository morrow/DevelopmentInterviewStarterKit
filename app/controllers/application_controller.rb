class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  unless ENV["SALESLOFT_API_KEY"]
    raise "Missing required SALESLOFT_API_KEY ENV variable. Please add to your .env and run `rake db:seed` to seed data. See README.md for more details."
  end
end
