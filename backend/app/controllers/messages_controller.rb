class MessagesController < ApplicationController

  def index
    message = Messages.all
    render json: MessagesSerializer.new(message)
  end

  def create
    message = Messages.new(messsage_params)
         if message.save
             render json: MessagesSerializer.new(message)
         else
             render json: {error: "could not save"}
         end
     end

  def show
    message = Messages.find(params[:id])
    render json: messages.to_json(except: [:created_at, :updated_at])
  end

  def update
      message = Messages.find(params[:id])
      if message.update(messages_params)
          render json: MessagesSerializer.new(message)
      else
          render json: {error: "could not save"}
      end
  end

  def destroy
      message = Messages.find(params[:id])
      message.destroy
      render json: {message: "successfully deleted #{message.detail}"}
  end

  private
  def message_params
      params.require(:message)
  end
  
end
