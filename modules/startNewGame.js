const newGameButton = document.querySelector(".new-game");
const main = document.querySelector("main");


export function insertNewGameCard() {
  main.appendChild(createNewGameCardElement());
}

function createNewGameCardElement() {
  const card = document.createElement("div");
  card.classList.add("new-game-card");

  card.innerHTML = `
    <p>Start new game</p>
    <form name="cell-style-selection" action="">
      <input type="radio" name="cell-style" value="Numbers" id="">
      <input type="radio" name="cell-style" value="Icons" id="">
    </form>
    <form name="board-size-selection" action="">
      <input type="radio" name="board-size" value="small" id="">
      <input type="radio" name="board-size" value="large" id="">
    </form>
    <button>GO</button>
  `;

  return card;
}