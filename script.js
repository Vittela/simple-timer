function derivateTimes(time) {
  let hours = Math.trunc((time / 3600));
  let minutes = Math.trunc((time % 3600) / 60);
  let seconds = (time % 3600) % 60;

  if (`${hours}`.length === 1) { hours = `0${hours}` };
  if (`${minutes}`.length === 1) { minutes = `0${minutes}` };
  if (`${seconds}`.length === 1) { seconds = `0${seconds}` };

  return (`${hours}:${minutes}:${seconds}`)
}

console.log(derivateTimes(432125))
