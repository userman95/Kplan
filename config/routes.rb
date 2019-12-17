Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  root to: redirect('/home')
  get 'articles', to: 'articles#content'
  match '*path', to: 'articles#index', via: :all
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
