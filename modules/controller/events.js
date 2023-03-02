import { insertNewGameCard } from "../view/startNewGame";
import { startGameButton } from "../view/newGameCardElement";
import insertBoard from "../view/insertBoard";
import restartBoard from "../model/game";
import { currentBoard } from "../model/game";
import { clearAllChecksElement } from "../view/checkCellElement";
import getFullCellDataAt from "./getFullCellData";
import clickCellHandler from "./clickCellHandler";

const newGameButton = document.querySelector(".new-game");
const restartButton = document.querySelector(".restart");

// to delete //////////////////////////////////////////
const testButton = document.querySelector(".test");
testButton.onclick = () => console.log(currentBoard.cellList);
///////////////////////////////////////////////////////

newGameButton.onclick = insertNewGameCard;
startGameButton.onclick  = startGame;
restartButton.onclick = ()=> {
  const size = currentBoard.cellList.length;

  restartBoard(size);
  clearAllChecksElement();
};

function startGame() {
  const boardSizeSelected = document.querySelector("input[name=board-size]:checked").value;
  const size = (boardSizeSelected === "small") ? 16 : 36;

  insertBoard(boardSizeSelected);
  restartBoard(size);

  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell, index) => {
    cell.addEventListener("click", ()=> {
      const fullCellData = getFullCellDataAt(index, cells);
      clickCellHandler(fullCellData, cells);
    }
    );
  });
}