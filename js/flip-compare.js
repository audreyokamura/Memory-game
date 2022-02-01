function flip() {
  let flipedCards = document.querySelectorAll(".fliped:not(.right)");
  if (flipedCards.length > 1) {
    return;
  }
  this.classList.add("fliped");
  flipedCards = document.querySelectorAll(".fliped:not(.right)");
  if (flipedCards.length < 2) {
    return;
  }
  compare(flipedCards);
}

function compare(cardPairs) {
  if (cardPairs[0].dataset.value === cardPairs[1].dataset.value) {
    correct(cardPairs);
  } else {
    incorrect(cardPairs);
  }
}
