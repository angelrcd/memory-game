export function setCheckCellElement(cell){
  cell.classList.add("check");
}

export function clearAllChecksElement() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => cell.classList.remove("check"));
}