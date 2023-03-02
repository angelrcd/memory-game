export function setCheckCellElement(cell, cellData){
  cell.classList.add("check");
  cell.textContent = cellData.value;
}

export function clearAllChecksElement() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.classList.remove("check");
  });
}

export function setGuessedCellElement(cell, cellData){
  cell.classList.add("guessed");
  cell.textContent = cellData.value;
}

export function clearAllGuessedElement() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.classList.remove("guessed");
  });
}

export function clearTextContent(cellNode){
  cellNode.textContent = "";
}

export function clearAllTextContent() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.textContent = "";
  });
}