export const newGameCardElement = document.createElement("div");
export const startGameButton = document.createElement("button");
startGameButton.classList.add("pill-button");
startGameButton.textContent = "GO";

newGameCardElement.classList.add("new-game-card");

newGameCardElement.innerHTML = `
    <p>Start new game</p>
    <form name="board-size-selection" action="">
      <p>Board Size:</p>
      <input type="radio" name="board-size" value="small" id="small" checked>
      <label for="small">Small</label>
      <input type="radio" name="board-size" value="large" id="large">
      <label for="large">Large</label>
    </form>
  `;

newGameCardElement.appendChild(startGameButton);