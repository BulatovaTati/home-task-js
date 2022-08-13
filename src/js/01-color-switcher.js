const refs = {
  startBtn: document.querySelector('button[data-start'),
  stopBtn: document.querySelector('button[data-stop'),
  body: document.querySelector('body'),
};
let intervalId = null;

refs.startBtn.addEventListener('click', onButtonStart);
refs.stopBtn.addEventListener('click', onButtonStop);

function onButtonStart() {
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.startBtn.disabled = true;
}

function onButtonStop() {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
