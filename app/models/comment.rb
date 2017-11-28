class Comment < ApplicationRecord

  belongs_to :parent_post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: 'Post'

  belongs_to :writer,
    primary_key: :id,
    foreign_key: :writer_id,
    class_name: 'User'


end
