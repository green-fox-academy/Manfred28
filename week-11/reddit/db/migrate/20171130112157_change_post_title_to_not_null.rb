class ChangePostTitleToNotNull < ActiveRecord::Migration[5.1]
  def change
    change_column_null(:posts, :title, false, "")
  end
end
