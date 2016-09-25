require 'bcrypt'

class User < ApplicationRecord

  attr_accessor :password_confirmation

  before_create :encrypt_password
  after_create :clear_password
  # after_find :clear_password

  validates :first, :last, :presence => true
  validates :username,
            :format => {with: /\A[a-zA-Z0-9]+\Z/},
            :uniqueness => true,
            :presence => true,
            :length   => {:minimum => 5}
  validates :password,
            :presence => {:on => :create},
            :length   => {:minimum => 6, :maximum => 20},
            :confirmation => true
  validates :password_confirmation, :presence => true
  validates :email,
            :presence => true,
            :uniqueness => true,
            :format => {with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i}

  def encrypt_password
    if password.present?
      pass = BCrypt::Password.create(password)
      self.password = pass
    end
  end

  def clear_password
    self.password = nil
  end

  def password_match (given_password)
    pass = BCrypt::Password.new(password)
    pass == given_password
  end

end
