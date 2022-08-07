import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';
const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const time = Number(localStorage.getItem(STORAGE_KEY));
if (time) {
  player.setCurrentTime(time);
}

player.on('timeupdate', Throttle(onVideoPlay, 1000));

function onVideoPlay({ seconds }) {
  try {
    localStorage.setItem(STORAGE_KEY, seconds);
  } catch (error) {
    console.log('Error:', error.message);
  }
}

// (function onPlayerLoad() {
//   try {
//     player.setCurrentTime(localStorage.getItem(STORAGE_KEY)).catch(error => {
//       console.log('Error:', error.message);
//     });
//   } catch (error) {
//     console.log('Error:', error.message);
//   }
// })();
