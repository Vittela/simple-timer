const timerDisplay = document.getElementById("timer-display");

let totalSeconds = 0;
let initialTime = totalSeconds;
let timer = null;
let counting = false;
timerDisplay.innerHTML = formatTime(totalSeconds)


// Timer functions

function definateTime(hours, minutes, seconds) {
  counting = false;
  updateTime();

  totalSeconds = derivateSeconds(hours, minutes, seconds);
  initialTime = totalSeconds;
  timerDisplay.innerHTML = formatTime(totalSeconds);

  return (`New time: ${hours}:${minutes}:${seconds}`);
}

function startCountdown() {
  counting = true;
  updateTime();

  return ("Countdown started");
}

function pauseCountdown() {
  counting = false;
  updateTime();

  return ("Countdown paused");
}

function resetCountdown() {
  counting = false;
  updateTime();

  totalSeconds = initialTime;
  timerDisplay.innerHTML = formatTime(totalSeconds);

  return ("Countdown restarted");
}

// Logic functions

function updateTime() {
  if (counting === true) {
    timer = setInterval(countdown, 1000);
  } else {
    clearInterval(timer);
    timer = null;
  }
}

function countdown() {
  console.log(formatTime(totalSeconds));
  timerDisplay.innerHTML = formatTime(totalSeconds);
  totalSeconds -= 1;

  if (totalSeconds < 1) { clearInterval(timer) };
}

function formatTime(timeInSeconds) {
  let hours = Math.trunc((timeInSeconds / 3600));
  let minutes = Math.trunc((timeInSeconds % 3600) / 60);
  let seconds = (timeInSeconds % 3600) % 60;

  if (`${hours}`.length === 1) { hours = `0${hours}` };
  if (`${minutes}`.length === 1) { minutes = `0${minutes}` };
  if (`${seconds}`.length === 1) { seconds = `0${seconds}` };

  return (`${hours}:${minutes}:${seconds}`);
};

function derivateSeconds(hours, minutes, seconds) {
  hours = Math.trunc((hours * 3600));
  minutes = Math.trunc(minutes * 60);

  return (hours + minutes + seconds);
}
