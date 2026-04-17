let visualTimer = document.getElementById("timer-display");
let totalSeconds = 4208;

setInterval(countdown, 1000)

function countdown() {
  console.log(derivateTimes(totalSeconds));
  visualTimer.innerHTML = derivateTimes(totalSeconds)
  totalSeconds -= 1;
}

// Organize and format hours, minutes and seconds.
function derivateTimes(timeInSeconds) {
  let hours = Math.trunc((timeInSeconds / 3600));
  let minutes = Math.trunc((timeInSeconds % 3600) / 60);
  let seconds = (timeInSeconds % 3600) % 60;

  if (`${hours}`.length === 1) { hours = `0${hours}` };
  if (`${minutes}`.length === 1) { minutes = `0${minutes}` };
  if (`${seconds}`.length === 1) { seconds = `0${seconds}` };

  return (`${hours}:${minutes}:${seconds}`)
}
