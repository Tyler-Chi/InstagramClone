require 'rails_helper'

RSpec.describe User, type: :model do

    it { should validate_presence_of(:username) }

    it { should have_many(:follows) }
    
    it { should have_many(:followings) }
    
    it { should have_many(:liked) }

    it { should have_many(:written_comments) }

    it { should have_many(:is_following) }
end