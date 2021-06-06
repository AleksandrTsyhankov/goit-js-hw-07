const categories = document.querySelectorAll(".item");

function countingNumberOfItems(categories) {
    console.log(`В списке ${categories.length} категории.`);

    categories.forEach((element) => {
        console.log(`Категория: ${element.querySelector("h2").textContent}`);
        console.log(`Количество элементов: ${element.querySelectorAll("li").length}`);
    })
};

countingNumberOfItems(categories);