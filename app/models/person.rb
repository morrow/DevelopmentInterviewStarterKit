class Person < ApplicationRecord

  validates_presence_of :name, :title
  validates_presence_of :email, uniqueness: true

end
