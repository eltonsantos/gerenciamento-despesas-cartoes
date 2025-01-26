FactoryBot.define do
  factory :statement do
    performed_at { 1.day.ago }
    cost { 100 }
    merchant { "Example Merchant" }
    transaction_id { "txn_123" }
    association :card
    association :category
  end
end