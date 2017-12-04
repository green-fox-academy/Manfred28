class ChangePostDefaultValues < ActiveRecord::Migration[5.1]
  def change
    change_column(:posts, :score, :integer, :default => 0)
    change_column(:posts, :vote, :integer, :default => 0)
  end
end
