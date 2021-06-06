const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

function creatingElements(ingredients) {
 const parentElement = document.querySelector("#ingredients");

  ingredients.forEach(ingridient => {
    const item = document.createElement("li");
    item.textContent = ingridient;

    parentElement.appendChild(item)
  });
}

creatingElements(ingredients)
