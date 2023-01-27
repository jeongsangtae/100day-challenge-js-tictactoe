// 모든 로직을 담당하는 파일
// 사용자 입력을 받아서 유효성을 검사하고 저장하는 파일

function openPlayerConfig(openEvent) {
  editedPlayer = +openEvent.target.dataset.playerid; // +"1" => 1

  playerConfigOverlay.style.display = "block";
  backdrop.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlay.style.display = "none";
  backdrop.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorOutput.innerHTML = "";
  // formElement.firstElementChild.lastElementChild.value = "";
  // formElement.children[0].children[1].value = "";
  formElement.querySelector("#playername").value = "";
}

function savePlayerConfig(saveEvent) {
  saveEvent.preventDefault();
  const formData = new FormData(saveEvent.target);
  const enteredPlayername = formData.get("playername").trim();

  if (!enteredPlayername) {
    // enteredPlayername === '' 와 동일하다.
    saveEvent.target.firstElementChild.classList.add("error");
    errorOutput.innerHTML = "유효한 이름을 입력해주세요.";
    return;
  }

  const updatedPlayerData = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerData.children[1].innerHTML = enteredPlayername;
  // if (editedPlayer === 1) {
  //   players[0].name = enteredPlayername;
  // } else {
  //   players[1].name = enteredPlayername;
  // }
  // 아래와 동일하게 작동하지만 아래가 훨씬 간결하다.
  players[editedPlayer - 1].name = enteredPlayername;
  closePlayerConfig();
}
