
class LoginController < ApplicationController
  before_action :validate_input, only: [:login]

  def login

    user = User.find_by(username: params[:username])

    render :json => user.password_match(params[:password])
    return

    invalid_login = false
    if user
      if user.password_match(params[:password])
        render :json => ['Authenticated']
      else
        invalid_login = true;
      end
    end

    if invalid_login
      render :json => ['Invalid username or password']
    end

  end

  def logout

  end

  def validate_input
    ar = []
    ar.append(params[:username]) if params[:username].blank?
    ar.append(params[:password]) if params[:password].blank?

    render :json => ['Username and password may not be blank'] if ar.length != 0

  end

end