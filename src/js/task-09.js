function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btn = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');


btn.addEventListener('click', changeClr);

function changeClr() {
  colorValue.textContent = getRandomHexColor();
  document.body.style.backgroundColor = colorValue.textContent;

  console.log(colorValue.textContent);
}







