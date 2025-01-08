function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxContainer = document.getElementById("boxes");
const numberField = document.getElementById("number-field");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");

destroyButton.addEventListener("click", destroyBoxes);

createButton.addEventListener("click", () => {
  createBoxes(Number(numberField.value));
  numberField.value = "";
});

function destroyBoxes() {
  boxContainer.innerHTML = "";
}

function createBoxes(amount) {
  if (amount > 0 && amount <= 100) {
    let additionalElements = "";
    for (let i = 0; i < amount; i++) {
      additionalElements += `<div style="width: ${30 + 10 * i}px; height: ${
        30 + 10 * i
      }px; background-color: ${getRandomHexColor()};"></div>`;
    }
    boxContainer.innerHTML = additionalElements;
  }
}
