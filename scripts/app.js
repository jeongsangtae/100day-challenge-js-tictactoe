// 여러가지를 초기화시키는 가장 먼저 실행되는 파일

const playerConfigOverlay = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");

const formElement = document.querySelector("form");

const editPlayer1Btn = document.getElementById("edit-player-1-btn");
const editPlayer2Btn = document.getElementById("edit-player-2-btn");

const cancelBtn = document.getElementById("cancel-config-btn");

// const submitBtn = document.getElementById("submit-config-btn");

// const playerName1 = document.getElementById("player-name-1");
// const playerName2 = document.getElementById("player-name-2");

// let changePlayerName = document.createElement("h3");

editPlayer1Btn.addEventListener("click", openPlayerConfig);
editPlayer2Btn.addEventListener("click", openPlayerConfig);

cancelBtn.addEventListener("click", closePlayerConfig);
backdrop.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

// submitBtn.addEventListener("click", submitPlayerConfig1);
// submitBtn.addEventListener("click", submitPlayerConfig2);
