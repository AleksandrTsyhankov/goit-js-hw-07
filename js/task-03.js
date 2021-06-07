const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

function createImages(images) {
  const parentElement = document.querySelector("#gallery");
  const createdImages = [];

  
  images.forEach(image => {
    createdImages.push(`<li><img width = 1260px height = 750px src="${image.url}" alt="${image.alt}"></img></li>`)
  });
  
  parentElement.style.display       = "flex";
  parentElement.style.flexDirection = "column";

  const imagesToAdd = createdImages.join('')
  parentElement.insertAdjacentHTML('afterbegin', imagesToAdd)
}

createImages(images)
