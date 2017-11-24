json.array! @posts do |post|
  json.extract! post, :id, :description, :authorId
end
