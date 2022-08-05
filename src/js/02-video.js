import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';
const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', Throttle(onVideoPlay, 1000));

function onVideoPlay({ seconds, percent, duration }) {
  localStorage.setItem(STORAGE_KEY, seconds);
  // console.log(percent, duration);
}

player.setCurrentTime(localStorage.getItem(STORAGE_KEY));

// ### playing

// ```js
// {
//     duration: 61.857
//     percent: 0
//     seconds: 0
// }
// ```
