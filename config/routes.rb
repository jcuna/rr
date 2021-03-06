Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'home#index'

  post '/login', to: 'login#login'
  delete '/logout', to: 'login#logout'
  post '/user/create', to: 'user#create'
  get '/user/get-current', to: 'user#current_user'

  #we only serve a static page. This is a front end app.
  match '*path' => 'home#index', :via => [:get]

end
