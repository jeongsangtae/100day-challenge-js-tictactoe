// 모든 로직을 담당하는 파일
// 사용자 입력을 받아서 유효성을 검사하고 저장하는 파일

function openPlayerConfig() {
  playerConfigOverlay.style.display = "block";
  backdrop.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlay.style.display = "none";
  backdrop.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  errorOutput.innerHTML = "";
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
}

// function submitPlayerConfig1() {
//   playerName1.innerHTML = changePlayerName;
//   changePlayerName.append(playerName1);
// }

// function submitPlayerConfig2() {
//   playerName2.innerHTML = changePlayerName;
//   changePlayerName.append(playerName2);
// }
