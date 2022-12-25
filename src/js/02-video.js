import Player from '@vimeo/player';
import { throttle } from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
console.log(123);

player.on(
  'timeupdate',
  throttle(evt => {
    localStorage.setItem('videoplayer-current-time', evt.seconds);
    console.log(evt.seconds);
  }, 1000)
);
player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .catch(function (error) {
    console.log(error);
  });
