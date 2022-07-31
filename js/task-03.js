const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// v1
const findListRef = document.querySelector(".gallery");

const createLiImages = (images) =>
  images.map(
    ({ url, alt }) =>
      `<li class="item" style="list-style: none">
  <img src="${url}" alt="${alt}" width="320" /></li>`
  );

const elements = createLiImages(images).join("");
findListRef.insertAdjacentHTML("beforeend", elements);

// v2
// const findListRef = document.querySelector('.gallery');
// // const createItem = ({ url, alt}) => {
// //   const map = `<li class="item" style="list-style: none">
// //   <img src="${url}" alt="${alt}" width="320" /></li>`;

// //   findListRef.insertAdjacentHTML("beforeend", map);
// //   return map;
// //   }

// const elements = images.map(createItem);
// console.log(elements);

// // v3
// const findListRef = document.querySelector(".gallery");
// const elements = images.map(createItem);
// findListRef.append(...elements);

// function createItem({ url, alt }) {
//   const element = `<li class="item" style="list-style: none">
//   <img src="${url}" alt="${alt}" width="320" /></li>`;

//   return element;
// }
