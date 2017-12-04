class Comment < ApplicationRecord
  validates :some_stuff, presence: true
  belongs_to :post
end
