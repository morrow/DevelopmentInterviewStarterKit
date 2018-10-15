class CreatePeopleJob < ApplicationJob
  queue_as :default

  def perform(*args)
    people = FetchPeopleJob.perform_now
    people.map{ |p|
      Person.create(
        name: p['display_name'],
        email: p['email_address'],
        title: p['title']
      )
    }
  end
end
