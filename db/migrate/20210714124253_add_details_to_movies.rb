class AddDetailsToMovies < ActiveRecord::Migration[6.0]
  def change
    add_column :movies, :release_date, :string
    add_column :movies, :original_language, :string
    add_column :movies, :original_title, :string
    add_column :movies, :vote_count, :string
  end
end
