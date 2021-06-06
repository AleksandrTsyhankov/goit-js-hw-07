const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function onInputChange(event) {
    if (event.currentTarget.value.length === 0) {
        return output.textContent = 'незнакомец';
    }
    return output.textContent = event.currentTarget.value;
}

input.addEventListener('input', onInputChange);