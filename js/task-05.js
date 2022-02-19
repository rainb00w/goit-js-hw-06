const inputForm = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputForm.addEventListener('input', changeName)

function changeName(event){
  
    outputName.textContent =  event.currentTarget.value;
    console.log(event.currentTarget.value);
    if (event.currentTarget.value.length === 0) {
        outputName.textContent = 'Anonymous';
    };
};

// console.log(inputForm);
// console.log(outputName);


