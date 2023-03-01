import Board from "./boardClass";

export let currentBoard;

export default function restartBoard(size){
  currentBoard = new Board(size);
}