class MessageSerializer
    include FastJsonapi::ObjectSerializer
    
    attributes :id, :detail
    
    belongs_to :user
  
end
