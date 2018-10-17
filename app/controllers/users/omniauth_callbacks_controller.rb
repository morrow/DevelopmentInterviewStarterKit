class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def salesloft
    @user = User.from_omniauth(request.env["omniauth.auth"])
    ENV['SALESLOFT_API_KEY'] = @user.token.access_token
    sign_in_and_redirect @user, event: :authentication
  end

  def failure
    errors = { errors: "sign in failed" }
    render json: errors
  end
end