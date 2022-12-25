import Player from '@vimeo/player';
import { throttle } from 'lodash';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const saveTime = localStorage.getItem('videoplayer-current-time');

player.on(
  'timeupdate',
  throttle(evt => {
    localStorage.setItem('videoplayer-current-time', evt.seconds);
    console.log(evt.seconds);
  }, 1000)
);

if (saveTime) {
  player.setCurrentTime(saveTime).catch(function (error) {
    console.log(error);
  });
}
