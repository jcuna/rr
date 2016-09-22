Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'home#index'

  get '/login', to: 'login#login'
  get '/logout', to: 'login#logout'

  get '/user/create', to: 'user#create'

end
