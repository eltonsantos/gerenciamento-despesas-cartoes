FactoryBot.define do
  factory :category do
    name { "Example Category" }
    association :company
  end
end