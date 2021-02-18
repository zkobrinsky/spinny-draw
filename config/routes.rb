Rails.application.routes.draw do
  resources :authors
  resources :creations
  root 'static#index'
  get '/*path' => 'static#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
