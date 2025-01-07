const inputName = document.getElementById("name-input");
const outputName = document.getElementById("name-output");

inputName.addEventListener("input", (event) => {
  if (event.target.value.trim() === "") {
    outputName.textContent = "Anonymous";
  } else {
    outputName.textContent = event.target.value.trim();
  }
});
