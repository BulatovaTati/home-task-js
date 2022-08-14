// Описан в документации
import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  timer: document.querySelector('.timer'),
  input: document.querySelector('#datetime-picker'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  button: document.querySelector('button'),
};

let selectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();

    if (selectedDate < Date.now()) {
      Notify.failure('Please choose a date in the future!');
      refs.button.setAttribute('disabled', 'true');
    } else {
      refs.button.removeAttribute('disabled');
      Notify.success('You can press START');
    }
  },
};

flatpickr(refs.input, options);

// Timer
const timer = {
  timerId: null,
  disable: (refs.button.disabled = true),

  start() {
    this.timerId = setInterval(() => {
      const currentDate = Date.now();

      const delta = selectedDate - currentDate;
      const time = convertMs(delta);
      updateClockFace(time);
    }, 1000);
  },
};

refs.button.addEventListener('click', () => {
  timer.start();
  refs.button.disabled = true;
  refs.input.disabled = true;
});

const addLeadingZero = value => {
  if (value < 10) {
    return String(value).padStart(2, '0');
  }
  return value;
};

function updateClockFace(time) {
  refs.days.textContent = addLeadingZero(time.days);
  refs.hours.textContent = addLeadingZero(time.hours);
  refs.minutes.textContent = addLeadingZero(time.minutes);
  refs.seconds.textContent = addLeadingZero(time.seconds);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

///////////////////////////////////////
// Test

// const millisecondsInSecond = 1000;
// const secondsInMinute = 60;
// const minutesInHour = 60;
// const hoursInDay = 24;

// const timer = targetDate => {
//   setInterval(() => {
//     const delta = new Date(targetDate) - new Date();

//     const seconds = Math.floor(
//       (delta / millisecondsInSecond) % secondsInMinute
//     );
//     const minutes = Math.floor(
//       (delta / (millisecondsInSecond * secondsInMinute)) % minutesInHour
//     );

//     const hours = Math.floor(
//       (delta / (millisecondsInSecond * secondsInMinute * minutesInHour)) %
//         hoursInDay
//     );
//     const days = Math.floor(
//       delta /
//         (millisecondsInSecond * secondsInMinute * minutesInHour * hoursInDay)
//     );
//     const timerFormat = `${days}:${hours}:${minutes}:${seconds}`;
//     renderTimer(timerFormat);
//   }, 1000);
// };

// const renderTimer = string => {
//   document.querySelector('span').innerText = string;
// };
// timer(new Date('2022/08/15'));
