const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

import throttle from 'lodash.throttle';

const onPlay = function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
};

player.on('timeupdate', throttle(onPlay, 1000));

const infoVideoStoped = JSON.parse(localStorage.getItem('videoplayer-current-time'));

if (infoVideoStoped !== null) {
  player.setCurrentTime(infoVideoStoped);
}
