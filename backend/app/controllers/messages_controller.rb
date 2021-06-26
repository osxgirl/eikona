class MessagesController < ApplicationController

  def index
    messages = Message.all
    render json: MessageSerializer.new(messages)
  end

  def create
    message = Message.new(messsage_params)
         if message.save
             render json: MessageSerializer.new(message)
         else
             render json: {error: "could not save"}
         end
     end

  def show
    message = Message.find(params[:id])
    render json: message.to_json(except: [:created_at, :updated_at])
  end

  def update
      message = Message.find(params[:id])
      if message.update(message_params)
          render json: MessageSerializer.new(message)
      else
          render json: {error: "could not save"}
      end
  end

  def destroy
      message = Message.find(params[:id])
      message.destroy
      render json: {message: "successfully deleted #{message.detail}"}
  end

  private
  def message_params
      params.require(:message)
  end
  
end
