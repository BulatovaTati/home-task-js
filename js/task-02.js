const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// v1
const findListRef = document.querySelector("#ingredients");

const createLiElement = (ingredients) => {
  return ingredients.map((elem) => {
    const liElement = document.createElement("li");
    liElement.classList.add("item");
    liElement.textContent = elem;
    liElement.style.color = "red";

    return liElement;
  });
};
const elements = createLiElement(ingredients);

findListRef.append(...elements);

// v2 Но тут не за одну операцию

// const findListRef = document.querySelector("#ingredients");
// const elements = ingredients.map(createLiElement);

// function createLiElement(ingredients) {
//   const liElement = document.createElement("li");
//   liElement.classList.add("item");
//   liElement.textContent = ingredients;
//   liElement.style.color = "red";

//   findListRef.append(liElement);
//   return liElement;
// }

// v3
// const findListRef = document.querySelector('#ingredients');
// const createLiElement = (ingredients) => {
//   return ingredients.map(elem => {
//     const liElement = document.createElement('li');
//     liElement.classList.add('item');
//     liElement.textContent = elem;
//     liElement.style.color = 'red';

//     return liElement;
//   });

// }
// const elements = createLiElement(ingredients);
// console.log(elements);
