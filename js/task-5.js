function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

changeColorButton.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  const currentColor = getRandomHexColor();
  colorName.textContent = currentColor;
  document.body.style.backgroundColor = currentColor;
}
