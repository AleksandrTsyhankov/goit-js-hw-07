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
  const allItems = [];

  ingredients.forEach(ingridient => {
    const item = document.createElement("li");
    item.textContent = ingridient;

    allItems.push(item);
  });

  parentElement.append(...allItems)
}

creatingElements(ingredients)
