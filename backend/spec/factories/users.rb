FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "user_#{n}@example.com" }
    sequence(:name) { |n| "Usuário_#{n}" }
    password { "password" }
    role { :admin }
    association :company
  end
end