
const fontSize = document.querySelector('#text');
const inputForm = document.querySelector('#font-size-control');

// console.log(fontSize.textContent);
// console.log(inputForm.value);

fontSize.style.fontSize = inputForm.value + 'px';

inputForm.addEventListener('input',function() {
    console.log(inputForm.value);
    fontSize.style.fontSize = inputForm.value + 'px';
});







