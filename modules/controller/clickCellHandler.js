import { setCheckCellElement } from "../view/checkCellElement";
import { currentBoard } from "../model/game";
import { clearAllChecksElement } from "../view/checkCellElement";

export default function clickCellHandler(fullCellData, cellsNodeList){
  const [cellData, cellElement] = fullCellData;

  // Clicking cells should do nothing if you already have two cells selected
  if (currentBoard.checkingList.length === 2){
    return;
  }

  setCheckCellElement(cellElement);
  currentBoard.checkCell(cellData);
  console.log(currentBoard.checkingList);

  if (currentBoard.checkingList.length === 2) {
    setTimeout(() => {
      clearAllChecksElement();
      currentBoard.emptyCheckList();
    }, 1000);
  }
}

function wait(ms) {
  const start = Date.now();
  while (Date.now() - start < ms) {}
}