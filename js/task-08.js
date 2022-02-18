const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const mail = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (!mail || !password) {
    console.log("alert: Необходимо заполнитль форму");
    window.alert("Заполните все поля!");
  } else {
    const formData = {
      mail,
      password,
    };
    console.log(formData);
    form.reset();
  }
}
