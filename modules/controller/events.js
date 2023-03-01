import { insertNewGameCard } from "../view/startNewGame";
import { startGameButton } from "../view/newGameCardElement";
import insertBoard from "../view/insertBoard";
import restartBoard from "../model/game";
import { currentBoard } from "../model/game";
import { setCheckCellElement, clearAllChecksElement } from "../view/checkCellElement";

const newGameButton = document.querySelector(".new-game");
const restartButton = document.querySelector(".restart");

// to delete //////////////////////////////////////////
const testButton = document.querySelector(".test");
testButton.onclick = () => console.log(currentBoard);
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
      setCheckCellElement(index+1);
      currentBoard.checkIndexCell(index);
    }
    );
  });
}