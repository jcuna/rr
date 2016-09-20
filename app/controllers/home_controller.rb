
class HomeController < ApplicationController

  def index
    @is_logged_in = false;
  end


  def get_people

    @people = Users.all

    render :json => User.all
  end


end