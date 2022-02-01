function correct(cardPairs) {
  cardPairs.forEach(function (element) {
    element.classList.add("right");
  });
}

function incorrect(cardPairs) {
  cardPairs.forEach(function (element) {
    element.classList.add("wrong");
  });
  setTimeout(function () {
    cardPairs.forEach(function (element) {
      element.classList.remove("fliped");
      element.classList.remove("wrong");
    });
  }, 2000);
}
