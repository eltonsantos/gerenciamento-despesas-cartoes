require 'rails_helper'

RSpec.describe StatementsHelper, type: :helper do
  # Helper para criar um usuário com um papel específico
  def create_user(role)
    User.create!(name: "Test User", email: "test@example.com", password: "password", role: role, company_id: company.id)
  end

  # Helper para criar uma empresa
  let(:company) { Company.create!(name: "Test Company") }

  # Helper para criar uma despesa
  let(:statement) do
    Statement.create!(
      cost: 1790,
      proof: true,
      date: Date.today,
      category: category,
      card: card,
      attachment: attachment
    )
  end

  let(:category) { Category.create!(name: "Test Category", company: company) }
  let(:card) { Card.create!(last4: '1234', user: user) }
  let(:user) { create_user('employee') }
  let(:attachment) { Attachment.create!(file: Rails.root.join('spec', 'fixtures', 'files', 'test_image.png').open) }

  before do
    allow(helper).to receive(:current_user).and_return(user)
  end

  describe '#proof_status' do
    it 'retorna "Comprovada" se a despesa for comprovada' do
      expect(helper.proof_status(statement)).to eq('Comprovada')
    end

    it 'retorna "Não Comprovada" se a despesa não for comprovada' do
      statement.update(proof: false)
      expect(helper.proof_status(statement)).to eq('Não Comprovada')
    end
  end

  describe '#formatted_cost' do
    it 'formata o custo corretamente em Reais' do
      expect(helper.formatted_cost(statement.cost)).to eq('R$ 17,90')
    end
  end

  describe '#formatted_date' do
    it 'formata a data no formato DD/MM/YYYY' do
      expect(helper.formatted_date(statement.date)).to eq(Date.today.strftime("%d/%m/%Y"))
    end

    it 'retorna nil se a data não estiver presente' do
      expect(helper.formatted_date(nil)).to be_nil
    end
  end

  describe '#category_select' do
    let(:form) { double('form') }
    let(:categories) { Category.where(company_id: company.id) }

    it 'chama collection_select com os argumentos corretos' do
      expect(form).to receive(:collection_select).with(:category_id, categories, :id, :name, prompt: 'Selecione uma categoria')
      helper.category_select(form, categories)
    end
  end

  describe '#display_image' do
    it 'retorna a tag de imagem se o anexo estiver presente' do
      expect(helper.display_image(statement)).to include('<img src="/')
    end

    it 'retorna nil se o anexo não estiver presente' do
      statement.update(attachment: nil)
      expect(helper.display_image(statement)).to be_nil
    end
  end

  describe '#display_card' do
    it 'retorna os últimos 4 dígitos do cartão se o cartão estiver presente' do
      expect(helper.display_card(statement)).to eq('1234')
    end

    it 'retorna "-" se o cartão não estiver presente' do
      statement.update(card: nil)
      expect(helper.display_card(statement)).to eq('-')
    end
  end

  describe '#display_employee_name' do
    it 'retorna o nome do usuário associado ao cartão se o cartão estiver presente' do
      expect(helper.display_employee_name(statement)).to eq(user.name)
    end

    it 'retorna "-" se o cartão ou o usuário associado não estiverem presentes' do
      statement.update(card: nil)
      expect(helper.display_employee_name(statement)).to eq('-')
    end
  end

  describe '#display_category' do
    it 'retorna o nome da categoria se a categoria estiver presente' do
      expect(helper.display_category(statement)).to eq(category.name)
    end

    it 'retorna "Sem classificação" se a categoria não estiver presente' do
      statement.update(category: nil)
      expect(helper.display_category(statement)).to eq('Sem classificação')
    end
  end

  describe '#display_edit_link' do
    it 'retorna o link de edição se o usuário for um funcionário' do
      expect(helper.display_edit_link(statement)).to include('Edit')
    end

    it 'retorna nil se o usuário não for um funcionário' do
      allow(helper).to receive(:current_user).and_return(create_user('admin'))
      expect(helper.display_edit_link(statement)).to be_nil
    end
  end

  describe '#display_archive_link' do
    it 'retorna o link de arquivamento se o usuário for um administrador' do
      allow(helper).to receive(:current_user).and_return(create_user('admin'))
      expect(helper.display_archive_link(statement)).to include('Arquivar')
    end

    it 'retorna nil se o usuário não for um administrador' do
      allow(helper).to receive(:current_user).and_return(create_user('employee'))
      expect(helper.display_archive_link(statement)).to be_nil
    end
  end
end
