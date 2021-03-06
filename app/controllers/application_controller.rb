class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def current_user
    if session[:session_token].nil?
      return nil
    end
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    session[:session_token] = user.reset_session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    unless logged_in?
      render json: { base: ['invalid username/password combination']}, status: 401
    end
  end


end
