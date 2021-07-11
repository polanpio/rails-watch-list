const displayDetailedCard = () => {
  const cards = document.querySelectorAll(".card-movie");
  const movieDetailsWrapper = document.querySelector(".movie-details-wrapper");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      movieDetailsWrapper.classList.add("active");
    })
    // card.addEventListener("click", () => {
    //   cards.forEach((card) => {
    //     if (card.classList.contains("active")) {
    //       card.classList.remove("active");
    //     }
    //   })
    //   card.classList.add('active');
    // })
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
