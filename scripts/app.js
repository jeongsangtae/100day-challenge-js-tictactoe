// 여러가지를 초기화시키는 가장 먼저 실행되는 파일
const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlay = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorOutput = document.getElementById("config-errors");
const gameArea = document.getElementById("active-game");
const activePlayerName = document.getElementById("active-player-name");

const editPlayer1Btn = document.getElementById("edit-player-1-btn");
const editPlayer2Btn = document.getElementById("edit-player-2-btn");
const cancelBtn = document.getElementById("cancel-config-btn");
const startNewGameBtn = document.getElementById("start-game-btn");
// const gameFields = document.querySelectorAll("#game-board li");
const gameBoard = document.getElementById("game-board");

editPlayer1Btn.addEventListener("click", openPlayerConfig);
editPlayer2Btn.addEventListener("click", openPlayerConfig);

cancelBtn.addEventListener("click", closePlayerConfig);
backdrop.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startNewGameBtn.addEventListener("click", startNewGame);

// for (const gameField of gameFields) {
//   gameField.addEventListener("click", selectGameField);
// }

gameBoard.addEventListener("click", selectGameField);
