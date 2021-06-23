class UsersController < ApplicationController

      def index
        users = User.all
            options = {include: [:messages]}
            render json: UserSerializer.new(users, include: [:messages])
      end
        
      def show
        user = User.find(params[:id])
        render json: user.to_json(:include => :messages)
      end
           
      def create
        user = User.new(user_params)
        if user.save
           render json: UserSerializer.new(user)
        else
           render json: {error: "could not save"}
        end
      end
        

      def destroy
        user = User.find(params[:id])
        user.destroy
        render json: {message: "successfully deleted #{user.name}"}
      end

      def update
        user = User.find(params[:id])
        if user.update(user_params)
            render json: UserSerializer.new(user)
        else
            render json: {error: "could not save"}
        end
      end

        private

      def user_params
          params.require(:user).permit(:name, :message)
      end

end

