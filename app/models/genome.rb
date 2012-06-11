class Genome < ActiveRecord::Base
  attr_accessible :angle, :length, :lengthmult, :recbias, :recursion, :spread, :spreadmult
end
