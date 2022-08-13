const refs = {
  startBtn: document.querySelector('button[data-start'),
  stopBtn: document.querySelector('button[data-stop'),
  span: document.querySelector('span'),
};

const renderTimer = string => {
  refs.span.innerText = string;
};

const millisecondsInSecond = 1000;
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
let intervalId = null;

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
  }, 0);
};
const pause = () => {
  clearTimeout(intervalId);
  refs.startBtn.disabled = false;
};

refs.startBtn.addEventListener('click', start);

refs.stopBtn.addEventListener('click', pause);
