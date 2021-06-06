const controls = {
    controlInput:   document.querySelector("#controls input"),
    controlCreate:  document.querySelector('button[data-action="render"]'),
    controlDestroy: document.querySelector('button[data-action="destroy"]'),
    boxes:          document.querySelector("#boxes"),
}

controls.controlCreate.addEventListener('click', onRenderElements);
controls.controlDestroy.addEventListener('click', onDestroyElements);

function createBoxes(amount) {
    for (let i = 1; i <= amount; i += 1) {
        const borderColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
        const item = document.createElement("div");

        item.setAttribute("style", `display: block; border: 4px solid ${borderColor}; width: 50px; height: 50px; margin: 20px`);

        controls.boxes.appendChild(item);
    }
}

function onRenderElements(event) {
    createBoxes(controls.controlInput.value);
}

function onDestroyElements() {
    return controls.boxes.innerHTML = '';
}
