class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :owner,
      t.text, :text
      t.integer :score
      t.references :post

      t.timestamps
    end
  end
end
