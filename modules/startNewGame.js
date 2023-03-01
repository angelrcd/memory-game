import insertBoard from "./insertBoard";
import { newGameCardElement, startNewGameButton } from "./newGameCardElement";

const newGameButton = document.querySelector(".new-game");
const main = document.querySelector("main");

newGameButton.addEventListener("click", ()=> {
  insertNewGameCard();
});

startNewGameButton.addEventListener("click", ()=> {
  startNewGame();
});

export function insertNewGameCard() {
  // remove board if it exists
  const board = document.querySelector(".board");
  if (board) {
    board.remove();
  }

  // should not add more card if there is already one
  main.appendChild(newGameCardElement);
}

export function startNewGame() {
  const boardSizeSelected = document.querySelector("input[name=board-size]:checked").value;

  insertBoard(boardSizeSelected);
}