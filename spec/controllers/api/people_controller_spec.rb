require 'rails_helper'

RSpec.describe Api::PeopleController, type: :controller do

  describe 'GET people#index' do

    it 'responds with 200' do
      get :index, { format: :json }
      expect(response).to have_http_status(:success)
    end

    it 'responds with JSON' do
      get :index, { format: :json }
      expect(JSON.parse(response.body)).to eq([])
    end

    it 'responds with correct data' do
      p = Person.create(name: 'Test Name', email: 'test@salesloft.com', title:'Test Title')
      get :index, { format: :json }
      people = JSON.parse(response.body)
      expect(people.length).to be > 0
      expect(people.last['name']).to eq(p.name)
      expect(people.last['email']).to eq(p.email)
      expect(people.last['title']).to eq(p.title)
    end

  end

end
