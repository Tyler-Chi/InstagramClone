Rails.application.routes.draw do


  namespace :api, defaults: {format: :json} do

    resource :session, only: [:create,:destroy,:show]
    resources :users, only: [:create]

    resources :posts

  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "root#root"
end
