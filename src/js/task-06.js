const inputForm = document.querySelector("#validation-input");

inputForm.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (
    event.currentTarget.value.length == inputForm.getAttribute("data-length")
  ) {
    inputForm.setAttribute("class", "valid");
    console.log("right");
  } else {
    inputForm.setAttribute("class", "invalid");
    console.log("wrong");
  }
}
