// 게임 로직을 담당하는 파일

function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("플레이어 이름을 입력해주세요.");
    return;
  }
  activePlayerName.innerHTML = players[activePlayer].name;
  gameArea.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerName.innerHTML = players[activePlayer].name;
}

function selectGameField(selectEvent) {
  if (selectEvent.target.tagName !== "LI") {
    return;
  }

  const selectedField = selectEvent.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (gameData[selectedRow][selectedColumn] > 0) {
    alert("비어있는 공간을 선택해주세요.");
    return;
  }

  selectedField.innerHTML = players[activePlayer].symbol;
  selectedField.classList.add("disabled");

  gameData[selectedRow][selectedColumn] = activePlayer + 1;

  const winnerId = checkForGameOver();
  console.log(winnerId);

  currentRound++;
  switchPlayer();
}

function checkForGameOver() {
  // 행이 같은지 확인
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }
  // 행이 같은지 확인
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }
  // 왼쪽 상단에서 오른쪽 하단 대각선을 확인
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }
  // 왼쪽 하단에서 오른쪽 상단 대각선을 확인
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }

  return 0;
}
