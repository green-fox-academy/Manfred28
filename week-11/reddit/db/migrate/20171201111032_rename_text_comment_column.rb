class RenameTextCommentColumn < ActiveRecord::Migration[5.1]
  def change
    rename_column :comments, :comment_text, :commentText    
  end
end
