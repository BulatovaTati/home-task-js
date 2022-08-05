import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
console.log('player: ', player);

player.on('timeupdate', Throttle(onPlayVideo, 1000));

function onPlayVideo({ seconds, percent, duration }) {
  localStorage.setItem('videoplayer-current-time', seconds);
  console.log(percent, duration);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

// ### playing

// Triggered when the video starts playing.

// ```js
// {
//     duration: 61.857
//     percent: 0
//     seconds: 0
// }
// ```
