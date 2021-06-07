const input = document.querySelector("input");
const validationStyles = document.querySelectorAll("#validation-input");
const validInputValueLength = parseInt(input.dataset.length);

function onInputChanges(event) {
    const inputValueLength = event.target.value.length;

    console.log(inputValueLength, validInputValueLength);
    if (inputValueLength === validInputValueLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else if (inputValueLength === 0) {
        input.classList.remove('valid', 'invalid');
    } else {input.classList.add('invalid');}
}

input.addEventListener('change', onInputChanges);