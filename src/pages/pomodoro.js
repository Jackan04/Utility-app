import { renderHeader } from "../components/header";

let intervalId;
let timeLeft = 25 * 60; // 25 minutes in seconds


function startTimer(clockText) {
    intervalId = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(intervalId);
        clockText.textContent = "Time's up!";
        return;
      }
  
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
      clockText.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
      timeLeft--;
    }, 1000);
  }
  
  function resetTimer(clockText) {
    clearInterval(intervalId);
    timeLeft = 25 * 60;
    clockText.textContent = "25:00";
  }

function createPomodoroElements(){
    const app = document.querySelector("#app");

    const pomodoroContent = document.createElement("div");
    const clockContainer = document.createElement("div");
    const clockText = document.createElement("h1");
    const btnStart = document.createElement("button");
    const btnReset = document.createElement("button");

    btnStart.setAttribute("id", "btn-start")
    btnReset.setAttribute("id", "btn-reset")

    clockText.textContent = "25:00"
    btnStart.textContent = "Start"
    btnReset.textContent = "Reset"

    clockContainer.appendChild(clockText)
    pomodoroContent.appendChild(clockContainer)
    pomodoroContent.appendChild(btnStart)
    pomodoroContent.appendChild(btnReset)

    btnStart.addEventListener("click", () => startTimer(clockText));
    btnReset.addEventListener("click", () => resetTimer(clockText));

    return pomodoroContent;

    
    
}


function renderPomodoroPage(){
    renderHeader("Pomodoro Timer", "", "rgba(255, 159, 91, 0.3)", "rgba(255, 159, 91, 1)")
    const pomodoroContent = createPomodoroElements();
    const app = document.querySelector("#app");
    app.innerHTML = "";
    app.appendChild(pomodoroContent);

}



export {renderPomodoroPage};