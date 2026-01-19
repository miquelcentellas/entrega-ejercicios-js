import "../sass/main.scss";
const button = document.querySelector("button");
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");
const iniciarBtn = document.getElementById("iniciar");
const pausarBtn = document.getElementById("pausar");
const reiniciarBtn = document.getElementById("reiniciar");

let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId = null;

function updateDisplay() {
  hoursSpan.textContent = String(hours).padStart(2, "0");
  minutesSpan.textContent = String(minutes).padStart(2, "0");
  secondsSpan.textContent = String(seconds).padStart(2, "0");
}

function startTimer() {
  if (intervalId) return; // Evitar múltiples intervalos
  intervalId = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetTimer() {
  pauseTimer();
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}

iniciarBtn.addEventListener("click", startTimer);
pausarBtn.addEventListener("click", pauseTimer);
reiniciarBtn.addEventListener("click", resetTimer);

updateDisplay();
