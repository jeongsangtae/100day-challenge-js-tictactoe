// 모든 로직을 담당하는 파일
// 사용자 입력을 받아서 유효성을 검사하고 저장하는 파일

function openPlayerConfig() {
  playerConfigOverlay.style.display = "block";
  backdrop.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlay.style.display = "none";
  backdrop.style.display = "none";
}

function savePlayerConfig(saveEvent) {
  saveEvent.preventDefault();
  const formData = new FormData(saveEvent.target);
  const enteredPlayername = formData.get("playername");
  console.log(enteredPlayername);
}

// function submitPlayerConfig1() {
//   playerName1.innerHTML = changePlayerName;
//   changePlayerName.append(playerName1);
// }

// function submitPlayerConfig2() {
//   playerName2.innerHTML = changePlayerName;
//   changePlayerName.append(playerName2);
// }
