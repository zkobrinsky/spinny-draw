class AddAuthorIdToCreations < ActiveRecord::Migration[6.1]
  def change
    add_reference :creations, :author, null: false, foreign_key: true
  end
end
