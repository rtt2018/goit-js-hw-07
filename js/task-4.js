const formLogin = document.querySelector(".login-form");

formLogin.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  if (
    event.target.elements.email.value === "" ||
    event.target.elements.password.value === ""
  ) {
    alert("'All form fields must be filled in'");
  }
  const formData = {};

  formData[event.target.elements.email.name] =
    event.target.elements.email.value;
  formData[event.target.elements.password.name] =
    event.target.elements.password.value;
  console.log(formData);

  event.target.reset();
}
