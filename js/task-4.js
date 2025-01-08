const formLogin = document.querySelector(".login-form");

formLogin.addEventListener("submit", formSubmit);
formLogin.elements.email.addEventListener("input", mailValidation);
formLogin.elements.password.addEventListener("input", passValidation);
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex =
  /^(?=.*[a-zA-Zа-яА-Я])(?=.*[A-ZА-Я])(?=.*[a-zа-я])(?=.*[\d!@#$%^&*]).{8,}$/;

function mailValidation(eventValidation) {
  if (emailRegex.test(eventValidation.target.value)) {
    eventValidation.target.setCustomValidity("");
  } else {
    eventValidation.target.setCustomValidity(
      "Введіть коректний email, наприклад usermail@mail.domen. Адреса має бути введена латиницею, містити символ @, після якого щонайменше 1 символ, потім . після якої щонайменше 2 символи"
    );
  }
  eventValidation.target.reportValidity();
}

function passValidation(eventPass) {
  if (passwordRegex.test(eventPass.target.value)) {
    eventPass.target.setCustomValidity("");
  } else {
    eventPass.target.setCustomValidity(
      "Введіть коректний пароль: щонайменше 8 символів, хоча б одна велика і мала буква, і хоча б одна цифра або один дозволений символ (напр. ! @ # $ % ^ & *)"
    );
  }
  eventPass.target.reportValidity();
}

function formSubmit(event) {
  event.preventDefault();

  if (
    event.target.elements.email.value === "" ||
    event.target.elements.password.value === ""
  ) {
    alert("'All form fields must be filled in'");
    return;
  }

  if (emailRegex.test(event.target.elements.email.value)) {
    event.target.elements.email.setCustomValidity("");
  } else {
    event.target.elements.email.setCustomValidity(
      "Введіть коректний email, наприклад usermail@mail.domen. Адреса має бути введена латиницею, містити символ @, після якого щонайменше 1 символ, потім . після якої щонайменше 2 символи"
    );
    return;
  }

  if (passwordRegex.test(event.target.elements.password.value)) {
    event.target.elements.password.setCustomValidity("");
  } else {
    event.target.elements.password.setCustomValidity(
      "Введіть коректний пароль: щонайменше 8 символів, хоча б одна велика і мала буква, і хоча б одна цифра або один дозволений символ (напр. ! @ # $ % ^ & *)"
    );
    return;
  }

  const formData = {};

  formData[event.target.elements.email.name] =
    event.target.elements.email.value;
  formData[event.target.elements.password.name] =
    event.target.elements.password.value;
  console.log(formData);

  event.target.reset();
}
