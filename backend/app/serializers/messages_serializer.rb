class MessagesSerializer
    include FastJsonapi::ObjectSerializer
    attributes :id, :detail
end
