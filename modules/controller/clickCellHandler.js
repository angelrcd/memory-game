import { setCheckCellElement, setGuessedCellElement } from "../view/checkCellElement";
import { currentBoard } from "../model/game";
import { clearAllChecksElement, clearTextContent } from "../view/checkCellElement";

export default function clickCellHandler(fullCellData, cellsNodeList){
  const [cellData, cellElement] = fullCellData;

  // Clicking cells should do nothing if you already have two cells selected
  if (currentBoard.checkingList.length === 2){
    return;
  }

  setCheckCellElement(cellElement, cellData);
  currentBoard.checkCell(fullCellData);
  console.log(currentBoard.checkingList);

  if (currentBoard.checkingList.length === 2) {
    const isGuessCorrect = currentBoard.compareCellsChecked();
    if (isGuessCorrect){
      setGuessedCellElement(currentBoard.checkingList[0][1], currentBoard.checkingList[0][0]);
      setGuessedCellElement(currentBoard.checkingList[1][1], currentBoard.checkingList[1][0]);
    }

    setTimeout(() => {
      if (!isGuessCorrect){
        clearTextContent(currentBoard.checkingList[0][1]);
        clearTextContent(currentBoard.checkingList[1][1]);
      }
      clearAllChecksElement();
      currentBoard.emptyCheckList();
    }, 1000);
  }
}