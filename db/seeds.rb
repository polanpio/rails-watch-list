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
      rating: movie['vote_average'],
      release_date: movie['release_date'],
      original_language: movie['original_language'],
      original_title: movie['original_title'],
      vote_count: movie['vote_count']
    )
  end
end
puts 'Created movies'
