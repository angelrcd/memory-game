const icons = [
  "/anchor.svg",
  "/bell.svg",
  "/check.svg",
  "/crown.svg",
  "/gear.svg",
  "/gifts.svg",
  "/shop.svg",
  "/smile.svg",
  "/star.svg",
  "/thumbs.svg",
  "/atom.svg",
  "/drink.svg",
  "/lamp.svg",
  "/music.svg",
  "/target.svg",
  "/spade.svg",
  "/clover.svg",
  "/snowman.svg",

];

export function setCheckCellElement(cell, cellData){
  cell.classList.add("check");
  // cell.textContent = cellData.value;
  const img = document.createElement("img");
  img.src = icons[cellData.value - 1];
  cell.append(img);
}

export function clearAllChecksElement() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.classList.remove("check");
  });
}

export function setGuessedCellElement(cell, cellData){
  cell.classList.add("guessed");
  // cell.textContent = cellData.value;
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