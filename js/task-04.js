const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const  counterValue = document.querySelector('#value');

let counter = 0;
counterValue.textContent = counter;

decrementBtn.addEventListener('click', () => {
    counter = counter - 1;
    counterValue.textContent = counter;
} );

incrementBtn.addEventListener('click', () => {
    counter = counter + 1;
    counterValue.textContent = counter;
} );