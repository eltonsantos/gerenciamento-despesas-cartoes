class Statement < ApplicationRecord
  belongs_to :card, optional: true
  belongs_to :category, optional: true

  has_one :attachment, dependent: :destroy

  validates :performed_at, :cost, :merchant, :transaction_id, presence: true

  accepts_nested_attributes_for :attachment
  
  before_save :set_proof_status
  
  private

    def set_proof_status
      if attachment.present? && category.present?
        self.proof = true
      else
        self.proof = false
      end
    end
end
