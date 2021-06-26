Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
   namespace :api do
    namespace :v1 do
      get 'messages/index'
      post 'messages/create'
      delete 'messages/:id', to: 'messages#destroy'
    end
  end
  
  root 'messages#index'
end
