function Clock(seconds, minutes, hours) {
  this.seconds = seconds;
  this.minutes = minutes;
  this.hours = hours;
}

function configurateTime(time) {
  if (time.seconds >= 60) {
    time.seconds -= 60;
    time.minutes += 1;
  }
  else if (time.minutes >= 60) {
    time.minutes -= 60;
    time.hours += 1;
  }

  else if (time.minutes >= 0) {
    if (time.seconds <= 0) {
      time.seconds += 60;
      time.minutes -= 1;
    }
  }

  else if (time.hours >= 0) {
    if (time.minutes <= 0) {
      time.minutes += 60;
      time.hours -= 1;
    }
  }
}

const clock_1 = new Clock(3, 1, 2)
const counter = setInterval(countdown, 1000)

function countdown() {
  configurateTime(clock_1)
  clock_1.seconds -= 1;

  if (clock_1.seconds <= 0 && clock_1.minutes <= 0 && clock_1.hours <= 0) { clearInterval(counter) }
  console.log(clock_1)
}
