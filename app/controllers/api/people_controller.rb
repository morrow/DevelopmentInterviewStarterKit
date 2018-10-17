class Api::PeopleController < Api::BaseController

  respond_to :json

  def index
    return render json: {}, status: 401 unless ENV['SALESLOFT_API_KEY']
     # Check for existence of people, CreatePeople from API now or later
    if Person.all.length < 1
      CreatePeopleJob.perform_now(ENV['SALESLOFT_API_KEY'])
    else
      CreatePeopleJob.perform_later(ENV['SALESLOFT_API_KEY'])
    end
    respond_with Person.all.sort_by(&:name).to_json
  end

end