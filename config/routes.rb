Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  root to: redirect('/home')
  get 'articles', to: 'articles#content'
  # get '/articles/:id', to: 'articles#show'
  # to kalutero route logo asfaleias tha itan: get 'home', to: 'articles#index' 
  # kai articles#index giati theloume na ginei render to index action pou periexei to javascript_pack
  match '*path', to: 'articles#index', via: :all
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
