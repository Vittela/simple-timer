// Interface variables
const timeEditor = document.getElementById("time-editor");
const inputHours = document.getElementById("input-hours");
const inputMinutes = document.getElementById("input-minutes");
const inputSeconds = document.getElementById("input-seconds");
const buttonToggle = document.getElementById("toggle");
const buttonStop = document.getElementById("stop");
const timerDisplay = document.getElementById("timer-display")

// Logic variables
let totalSeconds = 40;
let initialTime = totalSeconds;
let timer = null;
let counting = false;

// Interface settings
timerDisplay.innerHTML = formatTime(totalSeconds);
buttonToggle.addEventListener("click", toggleCountdown);
buttonStop.addEventListener("click", StopCountdown);

[inputHours, inputMinutes, inputSeconds].forEach(input => {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") disableEditMode();
  });

  input.addEventListener("blur", () => {
    setTimeout(() => {
      if (!timeEditor.contains(document.activeElement)) {
        disableEditMode();
      }
    }, 100);
  });
});

// Interface functions

function enableEditMode() {
  timerDisplay.style.display = "none";
  timeEditor.style.display = "block";

  const [h, m, s] = formatTime(initialTime).split(":");

  inputHours.value = Number(h);
  inputMinutes.value = Number(m);
  inputSeconds.value = Number(s);

  inputHours.focus();
}

function disableEditMode() {
  const h = Number(inputHours.value) || 0;
  const m = Number(inputMinutes.value) || 0;
  const s = Number(inputSeconds.value) || 0;

  totalSeconds = derivateSeconds(h, m, s);
  initialTime = totalSeconds;

  timerDisplay.innerHTML = formatTime(totalSeconds);

  timeEditor.style.display = "none";
  timerDisplay.style.display = "block";
}

function updateInterface() {
  if (counting === true) {
    buttonToggle.ariaLabel = "Pause"
    buttonToggle.innerHTML = `
<svg width="32" height="32" viewBox="0 0 24 24">
  <rect x="6" y="5" width="4" height="14" fill="#1466E0"/>
  <rect x="14" y="5" width="4" height="14" fill="#1466E0"/>
</svg>`
  } else {
    buttonToggle.ariaLabel = "Start"
    buttonToggle.innerHTML = `
<svg width="30" height="30" viewBox="0 0 24 24">
  <path d="M8 5v14l11-7z" fill="#1466E0"/>
</svg>`
  }
}


// Timer functions

function definateTime(hours, minutes, seconds) {
  counting = false;
  updateTime();

  totalSeconds = derivateSeconds(hours, minutes, seconds);
  initialTime = totalSeconds;
  timerDisplay.innerHTML = formatTime(totalSeconds);

  return (`New time: ${hours}:${minutes}:${seconds}`);
}

function toggleCountdown() {
  if (counting === false) { counting = true; }
  else { counting = false }
  updateTime();
  updateInterface();

  return ("Countdown toggled");
}

function StopCountdown() {
  counting = false;
  updateTime();
  updateInterface();

  enableEditMode();

  return ("Countdown stopped");
}

function updateTime() {
  if (counting === true) {
    if (timer !== null) return;
    timer = setInterval(countdown, 1000);
  } else {
    clearInterval(timer);
    timer = null;
  }
}

// Logic functions

function countdown() {
  console.log(formatTime(totalSeconds))
  timerDisplay.innerHTML = formatTime(totalSeconds);
  totalSeconds -= 1;

  if (totalSeconds < 0) { clearInterval(timer) };
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
