// 게임 로직을 담당하는 파일

function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("플레이어 이름을 입력해주세요.");
    return;
  }
  gameArea.style.display = "block";
}
