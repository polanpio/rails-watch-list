const displayDetailedCard = () => {
  const movieTitle = document.getElementById("movie-title");
  const movieOverview = document.getElementById("movie-overview");
  const cards = document.querySelectorAll(".card-movie");
  const movieDetailsWrapper = document.querySelector(".movie-details-wrapper");
  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      const movieObject = JSON.parse(e.currentTarget.dataset.cardMovie)
      movieDetailsWrapper.className = "movie-details-wrapper active";
      movieTitle.innerText = movieObject.title;
      movieOverview.innerText = movieObject.overview;
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
