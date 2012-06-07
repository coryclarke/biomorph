class CreateGenomes < ActiveRecord::Migration
  def change
    create_table :genomes do |t|

      t.timestamps
    end
  end
end
