const range = document.getElementById("font-size-control");
const text = document.getElementById("text");

text.style.fontSize = `${range.value}px`;

function onRangeChange(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
}

range.addEventListener('input', onRangeChange)

