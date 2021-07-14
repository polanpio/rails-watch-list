const displayDetailedCard = () => {
  const movieTitle = document.getElementById("movie-title");
  const movieOverview = document.getElementById("movie-overview");
  const movieRating = document.getElementById("movie-rating");
  const movieOriginalTitle = document.getElementById("movie-original-title");
  const movieReleaseDate = document.getElementById("movie-release-date");
  const movieOriginalLanguage = document.getElementById("movie-original-language");
  const cards = document.querySelectorAll(".card-movie");
  const movieDetailsWrapper = document.querySelector(".movie-details-wrapper");
  console.log(movieRating);
  console.log(movieReleaseDate);
  console.log(movieOriginalTitle);
  console.log(movieOriginalLanguage);
  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      const movieObject = JSON.parse(e.currentTarget.dataset.cardMovie)
      console.log(movieObject)
      movieDetailsWrapper.className = "movie-details-wrapper active";
      movieTitle.innerText = movieObject.title;
      movieOverview.innerText = movieObject.overview;
      movieRating.innerText = `Rating: ${movieObject.rating}`;
      movieOriginalTitle.innerText = `Original title: ${movieObject.original_title}`;
      movieReleaseDate.innerText = movieObject.release_date;
      movieOriginalLanguage.innerText = `Language: ${movieObject.original_language}`;
    })
  })
}

const trimmingOverview = () => {
  const cardsParagraphs = document.querySelectorAll('.movie-info p small');
  cardsParagraphs.forEach(cardsParagraph => {
    if (cardsParagraph.innerText.length > 80) {
      cardsParagraph.innerText = `${cardsParagraph.innerText.substring(0, 80)}...`
    }
  })
}

export { displayDetailedCard, trimmingOverview };
