import { setCheckCellElement, setGuessedCellElement } from "../view/checkCellElement";
import { currentBoard } from "../model/game";
import { clearAllChecksElement, clearTextContent } from "../view/checkCellElement";
import { setMovesCounter } from "../view/counterElements";
import { setTimerToZero } from "../model/timer";
import { setTimeCounterNode } from "../view/counterElements";
import getGameWinModal from "../view/GameWinDialog";

const correctAudio = new Audio("sound/correct.wav");
correctAudio.volume = 0.5;

export default function clickCellHandler(fullCellData){
  const [cellData, cellElement] = fullCellData;

  // Clicking cells should do nothing if you already have two cells selected
  if (currentBoard.checkingList.length === 2){
    return;
  }

  // Clicking cell of an already guessed cell should do nothing
  if (cellData.isGuessed){
    return;
  }

  // Check if you are clicking the same cell that is already being checked
  if (currentBoard.checkingList[0] && (cellElement === currentBoard.checkingList[0][1])){
    return;
  }

  setCheckCellElement(cellElement, cellData);
  currentBoard.checkCell(fullCellData);

  if (currentBoard.checkingList.length === 2) {
    // Increases and displays the moves count
    currentBoard.movesCounter++;
    setMovesCounter(currentBoard.movesCounter);

    
    const isGuessCorrect = currentBoard.compareCellsChecked();
    if (isGuessCorrect){
      correctAudio.play();
      setGuessedCellElement(currentBoard.checkingList[0][1], currentBoard.checkingList[0][0]);
      setGuessedCellElement(currentBoard.checkingList[1][1], currentBoard.checkingList[1][0]);

      // check if all cells have been guessed
      if (currentBoard.isGameOver()){
        const time = document.querySelector(".time-counter p:nth-child(2)").textContent;
        const moves = document.querySelector(".moves-counter p:nth-child(2)").textContent;

        setTimerToZero(setTimeCounterNode);
        setTimeCounterNode(time);
        
        console.log("Ganasteeee!!!");
        const gameWinModal = getGameWinModal(time, moves);
        gameWinModal.showModal();
      }
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