
class LoginController < ApplicationController
  before_action :validate_input, only: [:login]

  def login

    invalid_login = true
    @user = User.find_by(username: params[:username])

    if @user
      if @user.password_match(params[:password])
        invalid_login = false
        create_session
        render_json 'Authenticated'
      end
    end

    if invalid_login
      render_json 'Invalid username or password', 301
    end

  end

  def logout
    if is_logged_in
      user_id, token, hash = cookies[:login_cookie].split(':')
      user_session = Session.where(:cookie => token).where(:user_id => user_id)
      if user_session
        user_session.destroy_all
      end
      reset_session
      cookies[:login_cookie] = {value: nil, expires: 1.day.ago}
    end
    render_json 'success'

  end

  def validate_input
    ar = []
    ar.append(params[:username]) if params[:username].blank?
    ar.append(params[:password]) if params[:password].blank?

    render_json 'Username and password may not be blank' if ar.length != 0

  end

end