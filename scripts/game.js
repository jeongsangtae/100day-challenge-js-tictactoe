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
  console.log(activePlayer);

  switchPlayer();
}
