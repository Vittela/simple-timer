const timer = document.getElementById("timer-display");

let time = 5
const counter = setInterval(countdown, 1000)

console.log(timer.innerHTML)

function countdown() {
  timer.innerHTML = ("00:00:0" + time)
  time -= 1

  if (time < 0) { clearInterval(counter) }
} 
