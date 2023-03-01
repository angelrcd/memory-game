export function setCheckCellElement(index){
  const cell = document.querySelector(`.cell:nth-child(${index})`);
  cell.classList.add("check");
}