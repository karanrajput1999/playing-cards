const middleCard = document.querySelector(".middle-card");
const rightCard = document.querySelector(".right-card");
const leftCard = document.querySelector(".left-card");

middleCard.addEventListener("click", () => {
  middleCard.classList.toggle("active");
});
rightCard.addEventListener("click", () => {
  rightCard.classList.toggle("active");
});
leftCard.addEventListener("click", () => {
  leftCard.classList.toggle("active");
});
