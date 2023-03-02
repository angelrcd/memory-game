export function setCheckCellElement(cell, cellData){
  cell.classList.add("check");
  cell.textContent = cellData.value;
}

export function clearAllChecksElement() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.classList.remove("check");
    cell.textContent = "";
  });
}