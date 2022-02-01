let cards = [
  "🍿️",
  "🍇️",
  "🌟️",
  "🔍️",
  "🤖️",
  "💝️",
  "🦓️",
  "💐️",
  "☔️",
  "♻️",
];

let setCards = cards.concat(cards);

function shuffleCards() {
  let result = setCards.sort(function () {
    return 0.5 - Math.random();
  });
  return result;
}

function displayCards() {
  let table = document.querySelector("#table");
  let shuffledCards = shuffleCards();
  shuffledCards.forEach(function (element) {
    let card = document.createElement("div");
    card.innerHTML = `<div class='card' data-value= ${element}><div class='card-content'>${element}</div></div>`;
    table.appendChild(card);
  });
}

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

function correct(cardPairs) {
  cardPairs.forEach(function (element) {
    element.classList.add("right");
  });
}

function incorrect(cardPairs) {
  cardPairs.forEach(function (element) {
    element.classList.remove("fliped");
  });
}

displayCards();

document.querySelectorAll(".card").forEach(function (element) {
  element.addEventListener("click", flip);
});
