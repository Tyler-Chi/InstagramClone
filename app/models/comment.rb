class Comment < ApplicationRecord

  belongs_to :parent_post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: 'Post'


end
