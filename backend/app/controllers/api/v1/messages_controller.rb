class Api::V1::MessagesController < Api::V1::BaseController
     before_action :set_message, only: [:show, :edit, :update, :destroy]

        def index
           messages = Message.all
           render json: messages
        end

        def create
          respond_with :api, :v1, Message.create(message_params)
        end

        def destroy
          respond_with Message.destroy(params[:id])
        end

        def update
          message = Message.find(params["id"])
          message.update_attributes(message_params)
          respond_with message, json: message
        end

        private

        def message_params
          params.require(:message).permit(:id, :detail)
        end
      end
