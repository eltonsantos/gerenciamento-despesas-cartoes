class Attachment < ApplicationRecord
  belongs_to :statement

  has_attached_file :file, styles: { medium: "300x300>", thumb: "50x50>" }
  validates_attachment_content_type :file, content_type: /\Aimage\/.*\Z/
end
