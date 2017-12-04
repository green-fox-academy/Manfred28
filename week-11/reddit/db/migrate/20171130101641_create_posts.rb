class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.integer :score
      t.string :owner
      t.integer :vote
      t.string :url, limit: 512

      t.timestamps
    end
  end
end
