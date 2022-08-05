import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(time) {
  localStorage.setItem('videoplayer-current-time', time);
}
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
