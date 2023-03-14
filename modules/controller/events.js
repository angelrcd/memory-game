import insertBoard from "../view/insertBoard";
import restartBoard from "../model/game";
import { currentBoard, setTheme } from "../model/game";
import { clearAllChecksElement } from "../view/checkCellElement";
import getFullCellDataAt from "./getFullCellData";
import clickCellHandler from "./clickCellHandler";
import { setMovesCounter, setTimeCounterNode } from "../view/counterElements";
import { startTimer, setTimerToZero } from "../model/timer";
import { closeGameWinModal } from "./GameWinModal";

const newGameButton = document.querySelector(".new-game");
const restartButton = document.querySelector(".restart");
const modal = document.querySelector("dialog");
const startGameButton = document.querySelector("dialog button");
const playAgainButton = document.querySelector("#game-win-modal button");

// to delete //////////////////////////////////////////
const testButton = document.querySelector(".test");
testButton.onclick = () => {
  console.log(currentBoard.cellList);
};
///////////////////////////////////////////////////////

newGameButton.onclick = () => modal.showModal();

startGameButton.onclick  =()=> {
  // Reset moves counter and timer counter
  setMovesCounter(0);
  setTimerToZero(setTimeCounterNode);

  startGame();
  modal.close();
};

restartButton.onclick = ()=> {
  // Reset moves and timer counter
  setMovesCounter(0);
  setTimerToZero(setTimeCounterNode);

  const size = currentBoard.cellList.length;

  restartBoard(size);
  clearAllChecksElement();
};

playAgainButton.onclick = ()=> {
  closeGameWinModal();
  // Show modal to start new game
  modal.showModal();
};

function startGame() {

  // Delete previous board if it exists
  const pastBoard = document.querySelector(".board");
  pastBoard?.remove();

  const boardSizeSelected = document.querySelector("input[name=board-size]:checked").value;
  const size = (boardSizeSelected === "small") ? 16 : 36;

  const themeSelected = document.querySelector("input[name=select-theme]:checked").value;
  setTheme(themeSelected);

  insertBoard(boardSizeSelected);
  restartBoard(size);

  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell, index) => {
    cell.addEventListener("click", ()=> {
      startTimer(setTimeCounterNode, currentBoard.isGameOver());
      const fullCellData = getFullCellDataAt(index, cells);
      clickCellHandler(fullCellData);
    }
    );
  });
}