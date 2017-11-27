Rails.application.routes.draw do


  namespace :api, defaults: {format: :json} do

    resource :session, only: [:create,:destroy,:show]
    resources :users, only: [:create]
    resources :likes
    resources :posts

  end

  resources :posts, :defaults => { :format => 'json' }


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "root#root"
end
