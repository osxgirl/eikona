class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name
  has_many :messages
  
  def index
    users = User.all
    render json: UserSerializer.new(users, include: [:messages])
  end
  
  def show
    user = User.find(params[:id])
    render json: UserSerializer.new(user, include: [:messages])
  end
end
