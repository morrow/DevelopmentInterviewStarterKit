class Api::PeopleController < Api::BaseController

  respond_to :json

  def index
    # check for empty data and run CreatePersonJob if necessary
    if Person.all.length < 1
      CreatePeopleJob.perform_now
    end
    respond_with Person.all.to_json
  end

end