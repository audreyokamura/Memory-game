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

function displayCards() {
  let table = document.querySelector("#table");
  setCards.forEach(function (element) {
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
