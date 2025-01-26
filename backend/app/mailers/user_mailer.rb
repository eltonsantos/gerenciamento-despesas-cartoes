class UserMailer < ApplicationMailer
  def welcome_employee
    @user = params[:user]
    @password = params[:password]
    mail(to: @user.email, subject: 'Bem-vindo(a) ao Espresso! Aqui estão suas credenciais de acesso')
  end
end