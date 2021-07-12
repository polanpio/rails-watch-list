require 'open-uri'
require 'json'

puts 'Clean current database'
Movie.destroy_all
puts 'Start seeding with movies from API'

url = 'http://tmdb.lewagon.com/movie/top_rated'
10.times do |i|
  puts "Page #{i} from the API"
  movies = JSON.parse(open("#{url}?page=#{i + 1}").read)['results']
  movies.each do |movie|
    puts "Creating #{movie['title']}"
    base_poster_url = 'https://image.tmdb.org/t/p/original'
    Movie.create(
      title: movie['title'],
      overview: movie['overview'],
      poster_url: "#{base_poster_url}#{movie['backdrop_path']}",
      rating: movie['vote_average']
    )
  end
end
puts 'Created movies'

# def movie_detail(loc_movie)
#   detail_data = JSON.parse(RestClient.get("https://api.themoviedb.org/3/movie/#{loc_movie}?api_key=#{ENV['MOVIE_API']}"))
#   edit_movie = Movie.find_by(movie_id: loc_movie)
#   edit_movie.budget = detail_data['budget']
#   edit_movie.tagline = detail_data['tagline']
#   edit_movie.runtime = detail_data['runtime']
#   edit_movie.save
# end
