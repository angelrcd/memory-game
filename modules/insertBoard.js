const main = document.querySelector("main")

export default function insertBoard(size){
  const board = document.createElement("div")
  board.classList.add("board")
  board.classList.add(size)


  const children = getBoardChildren(size)

  board.appendChild(children)
  main.appendChild(board)
}

function getBoardChildren(boardSize) {
  const childrenNumber = (boardSize === 'small') ? 16 : 36;

  const children = document.createDocumentFragment();

  for (let i = 0; i < childrenNumber; i++){
    const cell = document.createElement("div")
    cell.classList.add("cell")
    children.appendChild(cell) 
  }

  return children;
}