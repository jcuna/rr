class CreateSessions < ActiveRecord::Migration[5.0]
  def change
    create_table :sessions do |t|
      t.string :client_ip, :limit => 20
      t.string :cookie, :limit => 155
      t.integer :user_id
      t.timestamp :expire
    end

    add_index :sessions, :user_id
    add_index :sessions, :expire
    add_index :sessions, :cookie
    add_foreign_key :sessions, :users

  end

  def down
    drop_table :sessions
  end
end
