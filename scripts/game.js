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

  selectEvent.target.innerHTML = players[activePlayer].symbol;
  selectEvent.target.classList.add("disabled");
  switchPlayer();
}
