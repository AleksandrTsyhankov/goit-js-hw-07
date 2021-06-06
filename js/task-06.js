const input = document.querySelector("input");
const validationStyles = document.querySelectorAll("#validation-input");
const validInputValueLength = parseInt(input.dataset.length);

function onInputChanges(event) {
    const inputValueLength = event.currentTarget.value.length;
    console.log(inputValueLength, validInputValueLength);
    if (inputValueLength > 0 && inputValueLength !== validInputValueLength) {
        return input.classList.add('invalid');
    }
    else if (inputValueLength === validInputValueLength) {
        return input.classList.add('valid');
    }
        return input.classList.remove('valid', 'invalid');
}

input.addEventListener('change', onInputChanges);