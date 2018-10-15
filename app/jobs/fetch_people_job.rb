class FetchPeopleJob < ApplicationJob
  queue_as :default

  def perform(*args)
    response = HTTParty.get(
      "http://api.salesloft.com/v2/people.json",
      headers: {
        "Authorization" => "Bearer #{ENV['SALESLOFT_API_KEY']}"
      }
    )
    return JSON.parse(response.body)['data']
  end

end
