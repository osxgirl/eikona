Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :messages, only: [:index, :create, :destroy, :update]
      
      get 'messages', to: 'messages#index'
    end
  end
end
