FactoryBot.define do
  factory :attachment do
    file { Rack::Test::UploadedFile.new(Rails.root.join('spec/fixtures/files/sample.jpg'), 'image/jpeg') }
    association :statement
  end
end