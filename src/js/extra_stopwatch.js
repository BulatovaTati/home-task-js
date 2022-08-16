const refs = {
  startBtn: document.querySelector('button[data-start'),
  stopBtn: document.querySelector('button[data-stop'),
  resetBtn: document.querySelector('button[data-reset'),
  span: document.querySelector('span'),
};

const millisecondsInSecond = 1000;
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;

let intervalId = null;

const renderTimer = string => {
  refs.span.innerText = string;
};

const start = () => {
  let initialDate = new Date();

  intervalId = setInterval(() => {
    const delta = new Date() - initialDate;

    const milliseconds = Math.floor(delta % millisecondsInSecond);
    const seconds = Math.floor(
      (delta / millisecondsInSecond) % secondsInMinute
    );
    const minutes = Math.floor(
      (delta / (millisecondsInSecond * secondsInMinute)) % minutesInHour
    );

    const hours = Math.floor(
      (delta / (millisecondsInSecond * secondsInMinute * minutesInHour)) %
        hoursInDay
    );
    const days = Math.floor(
      delta /
        (millisecondsInSecond * secondsInMinute * minutesInHour * hoursInDay)
    );

    const UISeconds =
      `${seconds}`.length === 2 ? seconds : `${seconds}`.padStart(2, '0');
    const UIMinutes = minutes.toString().length === 2 ? minutes : `0${minutes}`;
    const UIHours = `${hours}`.length === 2 ? hours : `0${hours}`;

    const timerFormat = `${days}:${UIHours}:${UIMinutes}:${UISeconds}:${milliseconds}`;

    renderTimer(timerFormat);

    refs.startBtn.disabled = true;
    refs.resetBtn.disabled = true;
  }, 0);
};

const startStop = () => {};

const stop = () => {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
  refs.resetBtn.disabled = false;
};

const reset = () => {
  refs.span.innerText = '';
};

refs.startBtn.addEventListener('click', start);
refs.startBtn.addEventListener('click', startStop);

refs.stopBtn.addEventListener('click', stop);
refs.resetBtn.addEventListener('click', reset);
