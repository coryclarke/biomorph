class CreateGenomes < ActiveRecord::Migration
  def change
    create_table :genomes do |t|
      t.float :spread
      t.float :spreadmult
      t.float :lengthmult
      t.float :length
      t.float :recursion
      t.float :recbias
      t.float :angle

      t.timestamps
    end
  end
end
