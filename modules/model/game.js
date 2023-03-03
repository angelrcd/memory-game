import Board from "./boardClass";
import { clearAllGuessedElement, clearAllChecksElement, clearAllTextContent } from "../view/checkCellElement";

export let currentBoard;
export let theme;

export default function restartBoard(size){
  currentBoard = new Board(size);
  clearAllChecksElement();
  clearAllGuessedElement();
  clearAllTextContent();

}