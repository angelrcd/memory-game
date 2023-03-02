import { currentBoard } from "../model/game";

export default function getFullCellDataAt(index, cellNodeList){
  return [currentBoard.cellList[index], cellNodeList[index]];
}