

class Post < ApplicationRecord
  validates :description, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :authorId,
    class_name: :User

  has_many :likes,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: 'Like'


end
