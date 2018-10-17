class Api::PeopleController < Api::BaseController

  respond_to :json

  def index
    return render json: {}, status: 401 unless ENV['SALESLOFT_API_KEY']
    CreatePeopleJob.perform_now(ENV['SALESLOFT_API_KEY'])
    respond_with Person.all.sort_by(&:name).to_json
  end

end