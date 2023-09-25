const newYear = "1 Jan 2024";
function countdown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();
  const milliSeconds = newYearDate - currentDate;
  const totalSecs = milliSeconds / 1000;

  const days = Math.floor(totalSecs / (3600 * 24));
  const hours = Math.floor(totalSecs / 3600) % 24;
  const minutes = Math.floor(totalSecs / 60) % 60;
  const secs = Math.floor(totalSecs) % 60;
  //console.log(days, hours, minutes, secs);

  document.querySelector(".count-secs").innerHTML = formatTime(secs);
  document.querySelector(".count-minutes").innerHTML = formatTime(minutes);
  document.querySelector(".count-hours").innerHTML = formatTime(hours);
  document.querySelector(".count-days").innerHTML = formatTime(days);
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
}
countdown();
setInterval(countdown, 1000);
