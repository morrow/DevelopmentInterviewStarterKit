Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: "users/omniauth_callbacks" }

  namespace :api, defaults: { format: "json" } do
    get :me, to: 'me#me'
    get :people, to: 'people#index'
  end

  get '/people', to: 'main#index'

  root to: "main#index"
end
