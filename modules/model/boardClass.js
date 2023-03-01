import Cell from "./cellClass";

export default class Board {
  constructor(boardSize) {
    this.cellList = shuffleArray(createArrOfCells(boardSize));
  }
}

function createArrOfCells(length){
  const arrCell = [];

  let currentValue = 0;
  for (let i = 0; i < length; i++) {
    if (i % 2 === 0) {
      currentValue++;
    }
    const newCell = new Cell(currentValue);
    arrCell.push(newCell);
  }

  return arrCell;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}