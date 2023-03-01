import { newGameCardElement} from "./newGameCardElement";

const main = document.querySelector("main");


export function insertNewGameCard() {
  // remove board if it exists 
  const board = document.querySelector(".board");
  if (board) {
    board.remove();
  }

  // should not add more card if there is already one
  main.appendChild(newGameCardElement);
}