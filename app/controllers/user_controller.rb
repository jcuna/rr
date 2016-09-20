
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
      render :json => user.errors.full_messages
    else
      render :json => ['success']
    end

  end

  def destroy

  end
end