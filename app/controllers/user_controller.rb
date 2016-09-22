
class UserController < ApplicationController

  def create

    user = User.create(
        first: params[:first],
        last: params[:last],
        username: params[:username],
        email: params[:email],
        password: params[:password],
        password_confirmation: params[:password_confirmation]
    )
    if ! user.errors.empty?
      render_json user.errors.full_messages, 500
    else
      render_json 'success'
    end

  end

  def destroy

  end
end