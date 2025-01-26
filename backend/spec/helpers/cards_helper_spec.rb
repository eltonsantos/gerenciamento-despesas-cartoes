require 'rails_helper'

RSpec.describe CardsHelper, type: :helper do
  describe "#user_select" do
    let!(:company) { create(:company) }
    let!(:current_user) { create(:user, company: company, role: :admin) }
    let!(:user1) { create(:user, company: company) }
    let!(:user2) { create(:user, company: company) }
    let!(:user_not_in_company) { create(:user) }

    let(:form) { double("form") }

    before do
      allow(helper).to receive(:current_user).and_return(current_user)
      allow(form).to receive(:collection_select) do |attribute, collection, value_method, text_method, options|
        prompt_option = "<option value=''>#{options[:prompt]}</option>"
        options = collection.map do |user|
          selected = user == user1 ? ' selected="selected"' : ''
          "<option#{selected} value='#{user.id}'>#{user.name}</option>"
        end.join
        "<select name=\"card[user_id]\" id=\"card_user_id\">#{prompt_option}#{options}</select>"
      end
    end

    context 'quando não passa uma pré-seleção' do
      let(:expected_html) do
        "<select name=\"card[user_id]\" id=\"card_user_id\">" \
        "<option value=\"\">Selecione um funcionário</option>" \
        "<option value=\"#{user1.id}\">#{user1.name}</option>" \
        "<option value=\"#{user2.id}\">#{user2.name}</option>" \
        "</select>"
      end

      it 'retorna o html correto' do
        result = helper.user_select(form, User.where(company_id: company.id))
        expect(result).to eq(expected_html)
      end
    end

    context 'quando há uma pré-seleção' do
      let(:expected_html_with_selection) do
        "<select name=\"card[user_id]\" id=\"card_user_id\">" \
        "<option value=\"\">Selecione um funcionário</option>" \
        "<option selected=\"selected\" value=\"#{user1.id}\">#{user1.name}</option>" \
        "<option value=\"#{user2.id}\">#{user2.name}</option>" \
        "</select>"
      end

      it 'retorna o html com a pré-seleção correta' do
        allow(form).to receive(:collection_select) do |attribute, collection, value_method, text_method, options|
          prompt_option = "<option value=''>#{options[:prompt]}</option>"
          options = collection.map do |user|
            selected = user == user1 ? ' selected="selected"' : ''
            "<option#{selected} value='#{user.id}'>#{user.name}</option>"
          end.join
          "<select name=\"card[user_id]\" id=\"card_user_id\">#{prompt_option}#{options}</select>"
        end

        result = helper.user_select(form, User.where(company_id: company.id))
        expect(result).to eq(expected_html_with_selection)
      end
    end
  end
end
