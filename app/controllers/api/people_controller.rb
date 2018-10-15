class Api::PeopleController < Api::BaseController

  respond_to :json

  def index
    respond_with Person.all.to_json
  end

end