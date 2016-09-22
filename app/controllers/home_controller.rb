
class HomeController < ApplicationController

  def index
    @is_logged_in = is_logged_in
  end

end