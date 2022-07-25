const boxes = document.querySelector('#boxes');
const input = document.querySelector('input');

const createBtnBox = document.querySelector('[data-create]');
const deleteBtnbox = document.querySelector('[data-destroy]');

createBtnBox.addEventListener('click', () => {
  const add = createBoxes(input.value);
  boxes.append(...add);
});

deleteBtnbox.addEventListener('click', () => {
  destroyBoxes.call();
});


function createBoxes(amount) {
  let baseSize = 30; 
  const collection = [];

  for (let i = 0; i < amount; i += 1) {
    baseSize += 10 * i;

    const newBox = document.createElement('div');
    newBox.style.backgroundColor = getRandomHexColor();
    // newBox.style.height = baseSize + 'px';
    // newBox.style.width = baseSize + 'px';
    // newBox.style.margin = '10px';
    newBox.style.cssText = ` background-color: ${getRandomHexColor()}; 
    height: ${baseSize + 'px'}; width: ${baseSize + 'px'}; margin: 10px;`;

    collection.push(newBox);
  }
  return collection;
}

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}