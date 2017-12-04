class ChangeTextColumnTypeAndName < ActiveRecord::Migration[5.1]
  def up
    rename_column :comments, :text, :comment_text
    change_column :comments, :comment_text, :text
  end
  def down
    rename_column :comments, :comment_text, :text
    change_column :comments, :text, :string
  end
end
