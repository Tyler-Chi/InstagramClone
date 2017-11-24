class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      
      t.integer :authorId
      t.string :img_url
      t.string :description

      t.timestamps
    end
  end
end
