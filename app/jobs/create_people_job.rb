class CreatePeopleJob < ApplicationJob
  queue_as :default

  def perform(token)
    people = FetchPeopleJob.perform_now(token)
    people.map{ |p|
      Person.create(
        name: p['display_name'],
        email: p['email_address'],
        title: p['title']
      )
    }
  end
end
