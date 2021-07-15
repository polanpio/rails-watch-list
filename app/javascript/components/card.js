const displayDetailedCard = () => {
  const movieTitle = document.getElementById("movie-title");
  const movieOverview = document.getElementById("movie-overview");
  const movieRating = document.getElementById("movie-rating");
  const movieOriginalTitle = document.getElementById("movie-original-title");
  const movieReleaseDate = document.getElementById("movie-release-date");
  const movieOriginalLanguage = document.getElementById("movie-original-language");
  const moviePoster = document.getElementById("movie-poster");
  const cards = document.querySelectorAll(".card-movie");
  const movieDetailsWrapper = document.querySelector(".movie-details-wrapper");
  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      const movieObject = JSON.parse(e.currentTarget.dataset.cardMovie)
      console.log(movieObject)
      movieDetailsWrapper.className = "movie-details-wrapper active";
      moviePoster.src = `${movieObject.poster_url}`
      movieTitle.innerText = movieObject.title;
      movieOverview.innerText = movieObject.overview;
      movieRating.innerText = `Rating: ${movieObject.rating}`;
      movieOriginalTitle.innerHTML = `<span>Original title:</span> ${movieObject.original_title}`;
      movieReleaseDate.innerText = movieObject.release_date;
      movieOriginalLanguage.innerText = `Language: ${movieObject.original_language}`;
    })
  })
}

const trimmingOverview = () => {
  const cardsParagraphs = document.querySelectorAll('.movie-info p small');
  cardsParagraphs.forEach(cardsParagraph => {
    if (cardsParagraph.innerText.length > 150) {
      cardsParagraph.innerText = `${cardsParagraph.innerText.substring(0, 150)}...`
    }
  })
}

export { displayDetailedCard, trimmingOverview };
