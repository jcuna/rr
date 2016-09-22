class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  before_filter :login_with_cookie

  def render_json(data, status = 200)
    render :json => {data: data, status: status}
  end

  def is_logged_in
    session[:is_logged_in].present?
  end

  def get_session_id
    session.id
  end

  def create_session
    unless session[:is_logged_in].present?
      session[:is_logged_in] = true

      @token = SecureRandom.urlsafe_base64 64
      cookie_first_part = "#{@user.id}:#{@token}"
      cookie_hash = Digest::SHA1.hexdigest(cookie_first_part)
      cookie_string = "#{cookie_first_part}:#{cookie_hash}"

      @expire = Time.now + (86400 * 14)

      store_session
      cookies[:login_cookie] = {value: cookie_string, expires: @expire, :path => '/'}
    end
  end

  def login_with_cookie

    if cookies[:login_cookie].present?
      user_id, token, hash = cookies[:login_cookie].split(':')
      if Digest::SHA1.hexdigest("#{user_id}:#{token}") == hash
        user_session = Session.includes(:user).where(:cookie => token).where(:user_id => user_id).first

        unless user_session.nil?
          @user_session = user_session
          @user = @user_session.user
          create_session
        end
      end
    end
  end

  # store session data
  def store_session
    if defined? (@user_session)
      @user_session.cookie = @token
      @user_session.expire = @expire
      @user_session.save
    else
      Session.create(
          client_ip: request.remote_ip,
          user_id: @user.id,
          cookie: @token,
          expire: @expire
      )
    end
    #clear off old sessions
    Session.where(user_id: @user.id).where('expire < ?', Time.now).destroy_all

  end
end
