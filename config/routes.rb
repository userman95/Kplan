Rails.application.routes.draw do
  get 'articles/index'
  get 'articles/edit'
  root 'articles#index'
  match '*path', to: 'articles#index', via: :all
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
