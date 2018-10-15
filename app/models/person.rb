class Person < ApplicationRecord

  validates_presence_of :name, :title, :email
  validates_uniqueness_of :email

end
