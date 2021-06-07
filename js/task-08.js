const controls = {
    controlInput:   document.querySelector("#controls input"),
    controlCreate:  document.querySelector('button[data-action="render"]'),
    controlDestroy: document.querySelector('button[data-action="destroy"]'),
    boxes:          document.querySelector("#boxes"),
}

controls.controlCreate.addEventListener('click', onRenderElements);
controls.controlDestroy.addEventListener('click', onDestroyElements);

let sizeOfAddedItem = 30;

function createBoxes(amount) {
    for (let i = 0; i < amount; i += 1) {
        const item = document.createElement("div");
        const borderColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();

        item.setAttribute("style", `display: block; border: 4px solid ${borderColor}; width: ${sizeOfAddedItem}px; height: ${sizeOfAddedItem}px; margin: 20px`);
        sizeOfAddedItem += 10
        
        controls.boxes.appendChild(item);
    }
}

function onRenderElements(event) {
    createBoxes(controls.controlInput.value);
}

function onDestroyElements() {
    sizeOfAddedItem = 30;
    return controls.boxes.innerHTML = '';

}



