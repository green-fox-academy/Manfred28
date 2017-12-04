class ChangeCommentScoreDefaultValue < ActiveRecord::Migration[5.1]
  def up
    change_column :comments, :score, :integer, default: 0
  end
  def down
    change_column :comments, :score, :integer, default: nil
  end
end
