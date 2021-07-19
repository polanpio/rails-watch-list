Rails.application.routes.draw do
  get 'movies/index'
  get 'movies/show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'lists#index'
  resources :lists, except: %i[edit update] do
    resources :bookmarks, only: %i[new create]
    resources :movies, only: :create
  end
  resources :bookmarks, only: :destroy
  resources :movies, only: %i[index destroy]
end
