displayCards();

document.querySelectorAll(".card").forEach(function (element) {
  element.addEventListener("click", flip);
});
