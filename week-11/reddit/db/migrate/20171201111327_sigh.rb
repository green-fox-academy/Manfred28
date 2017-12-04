class Sigh < ActiveRecord::Migration[5.1]
  def change
    rename_column :comments, :commentText, :some_stuff        
  end
end
