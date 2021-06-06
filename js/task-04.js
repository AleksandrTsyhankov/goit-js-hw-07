const counter = document.querySelector("#value");
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
let counterValue = 0;

function onIncrementClick() {
    counterValue += 1;
    return counter.textContent = counterValue;
}

function onDecrementClick() {
    counterValue -= 1;
    return counter.textContent = counterValue;
}

increment.addEventListener('click', onIncrementClick);
decrement.addEventListener('click', onDecrementClick);
