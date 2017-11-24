

class Post < ApplicationRecord
  validates :description, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :authorId,
    class_name: :User




end
