class User < ApplicationRecord

  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  after_initialize :ensure_session_token

  has_many :posts,
    primary_key: :id,
    foreign_key: :authorId,
    class_name: 'Post'

  has_many :follow_ids,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: 'Follow'

  has_many :following_id,
    primary_key: :id,
    foreign_key: :followee_id,
    class_name: 'Follow'

  has_many :followers,
    through: :follow_ids,
    source: :following_id

  # PREFV

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def self.find_by_credentials(username,password)
    user = User.find_by(username: username)
    return nil unless user
    return nil unless user.valid_password?(password)
    return user
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

end
