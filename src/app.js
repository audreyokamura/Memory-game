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
  this.classList.add("fliped");
}

displayCards();

document.querySelectorAll(".card").forEach(function (element) {
  element.addEventListener("click", flip);
});
