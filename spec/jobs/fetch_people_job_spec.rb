require 'rails_helper'

RSpec.describe FetchPeopleJob, type: :job do

  it 'fetches people from an API endpoint' do
    ActiveJob::Base.queue_adapter = :test
      people = FetchPeopleJob.perform_now(ENV['SALESLOFT_API_KEY'])
      expect(people.length).to be > 0

  end

  it 'creates an enqueued job' do
    ActiveJob::Base.queue_adapter = :test
      expect {
        FetchPeopleJob.perform_later(ENV['SALESLOFT_API_KEY'])
      }.to have_enqueued_job

  end
end