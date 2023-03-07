let timerInterval;
let timer = 0, minutes, seconds;

export function startTimer(printToScreen, isGameOver) {
  if (timerInterval || isGameOver){
    return;
  }

  timerInterval = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    printToScreen(minutes + ":" + seconds);

    timer++;
  }, 1000);
}

export function setTimerToZero(printToScreen) {
  clearInterval(timerInterval);
  timerInterval = null;
  timer = 0;
  printToScreen("00:00");
}