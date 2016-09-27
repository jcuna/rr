
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

  def current_user
    if cookies[:login_cookie].present?
      user_id, token, hash = cookies[:login_cookie].split(':')
        if Digest::SHA1.hexdigest("#{user_id}:#{token}") == hash
          user = Session.includes(:user).where(:cookie => token).where(:user_id => user_id)
          if user.first.nil?
            cookies[:login_cookie] = {value: nil, expires: 1.day.ago}
            render_json 'error', 500
          else
            user.first.user.password = nil
            render_json user.first.user
          end
        else
          reset_session
          render_json 'error', 500
        end
    else
      render_json nil, 204
    end
  end

  def destroy

  end
end