class Api::PeopleController < Api::BaseController

  respond_to :json

  def index
    if user_signed_in? and current_user.token
      CreatePeopleJob.perform_now(current_user.token.access_token)
    elsif ENV['SALESLOFT_API_KEY']
      CreatePeopleJob.perform_now(ENV['SALESLOFT_API_KEY'])
    else
      return render json: {}, status: 401
    end
    respond_with Person.all.sort_by(&:name).to_json
  end

end