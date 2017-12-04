class ChangeSomeStuffColumnToString < ActiveRecord::Migration[5.1]
  def up
    change_column :comments, :some_stuff, :string    
  end
  def down
    change_column :comments, :some_stuff, :text    
  end
end
