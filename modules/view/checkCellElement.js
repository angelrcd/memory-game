export function setCheckCellElement(index){
  const cell = document.querySelector(`.cell:nth-child(${index})`);
  cell.classList.add("check");
}

export function clearAllChecksElement() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => cell.classList.remove("check"));
}