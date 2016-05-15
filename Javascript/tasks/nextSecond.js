function nextSecond(currentTime) {

  var seconds = currentTime[0] * 3600 + currentTime[1] * 60 + currentTime[2] + 1;

  var hours = Math.floor(seconds / 3600) % 24;
  var minutes = Math.floor((seconds - hours * 3600) / 60) % 60;

  var s = (seconds - hours * 3600 - minutes * 60) % 60;

  return [hours, minutes, s];
}

function nextSecond(c) {
  var data = new Date;

  data.setHours(c[0]);
  data.setMinutes(c[1]);
  data.setSeconds(c[2]);

  data = +data + 1000;

  var d = new Date;
  d.setTime(data);

  return [d.getHours(), d.getMinutes(), d.getSeconds()];
}
