const gameWinModal = document.querySelector("#game-win-modal");
const timeResult = document.querySelector(".time-result");
const movesResult = document.querySelector(".moves-result");

function setGameWinModal(time, moves){
  timeResult.textContent = "Time: " + time;
  movesResult.textContent = "Moves: " + moves;
}

export function showGameWinModal(time, moves){
  setGameWinModal(time, moves);
  gameWinModal.showModal();
}

export function closeGameWinModal(){
  gameWinModal.close();
}