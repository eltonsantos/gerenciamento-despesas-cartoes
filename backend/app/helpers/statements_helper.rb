module StatementsHelper
  def proof_status(statement)
    statement.proof ? 'Comprovada' : 'Não Comprovada'
  end

  def formatted_cost(cost)
    number_to_currency(cost.to_f, unit: "R$ ", separator: ",", delimiter: ".", precision: 2)
  end

  def formatted_date(date)
    date.strftime("%d/%m/%Y") if date.present?
  end

  def category_select(form, categories)
    categories = categories.where(company_id: current_user.company_id)
    form.collection_select(:category_id, categories, :id, :name, prompt: 'Selecione uma categoria')
  end

  def display_image(statement)
    if statement.attachment.present?
      image_tag(statement.attachment.file.url(:thumb))
    end
  end

  def display_card(statement)
    statement.card ? statement.card.last4 : '-'
  end

  def display_employee_name(statement)
    statement.card&.user&.name ? statement.card.user.name : '-'
  end

  def display_category(statement)
    statement.category ? statement.category.name : 'Sem classificação'
  end

  def display_edit_link(statement)
    return unless current_user.role == 'employee'
    
    link_to 'Edit', edit_statement_path(statement)
  end

  def display_archive_link(statement)
    return unless current_user.role == 'admin'
  
    link_to 'Arquivar', archive_statement_path(statement), method: :patch, data: { confirm: 'Ao arquivar a despesa ela será movida para a aba "Arquivadas". Tem certeza?' }
  end
end
