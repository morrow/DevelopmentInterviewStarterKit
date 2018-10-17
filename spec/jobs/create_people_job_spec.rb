require 'rails_helper'

RSpec.describe CreatePeopleJob, type: :job do

  it 'creates people from fetched data' do
    ActiveJob::Base.queue_adapter = :test
      CreatePeopleJob.perform_now(ENV['SALESLOFT_API_KEY'])
      expect(Person.all.length).to be > 0
  end

  it 'creates an enqueued job' do
    ActiveJob::Base.queue_adapter = :test
      expect {
        CreatePeopleJob.perform_later(ENV['SALESLOFT_API_KEY'])
      }.to have_enqueued_job

  end
end