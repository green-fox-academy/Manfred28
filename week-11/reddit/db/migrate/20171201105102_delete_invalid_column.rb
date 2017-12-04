class DeleteInvalidColumn < ActiveRecord::Migration[5.1]
  def up
    remove_column :comments, :[]
  end
end
