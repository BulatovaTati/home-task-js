import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';
const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', Throttle(onVideoPlay, 1000));

function onVideoPlay({ seconds, percent, duration }) {
  try {
    localStorage.setItem(STORAGE_KEY, seconds);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.value);
  }
}

try {
  player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
} catch (error) {
  console.log(error, 'error');
}
