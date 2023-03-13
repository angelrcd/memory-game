const gameWinDialogBox = document.querySelector("#game-win-modal");


export default function getGameWinModal(time, moves){
  gameWinDialogBox.innerHTML = `
    <p>You won!</p>
    <p>Time: ${time}</p>
    <p>Moves: ${moves}</p>
  `;

  return gameWinDialogBox;
}