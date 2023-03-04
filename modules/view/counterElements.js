const movesCounterNode = document.querySelector(".moves-counter p:last-child");
const timeCounterNode = document.querySelector(".time-counter p:last-child");

export function setMovesCounter(numberOfMoves){
  movesCounterNode.textContent = numberOfMoves;
}

export function setTimeCounterNode(currentTime){
  timeCounterNode.textContent = currentTime;
}