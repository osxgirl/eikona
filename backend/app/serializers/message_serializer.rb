class MessageSerializer
    include FastJsonapi::ObjectSerializer
    attributes :id, :detail
end
