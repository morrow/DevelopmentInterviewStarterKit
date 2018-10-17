class FetchPeopleJob < ApplicationJob
  queue_as :default

  def perform(token)
    raise 'No suitable API credentials supplied. Please edit .env to include these credentials.' unless token
    response = HTTParty.get(
      "http://api.salesloft.com/v2/people.json",
      headers: {
        "Authorization" => "Bearer #{token}"
      }
    )
    return JSON.parse(response.body)['data']
  end

end


