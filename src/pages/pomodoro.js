import { renderHeader } from "../components/header"

let intervalId
let timeLeft = 25 * 60
let isSoundEnabled = true;


function startTimer(clockText) {
   
  intervalId = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(intervalId)
        clockText.textContent = "Time's up!"

        if(isSoundEnabled){
           const audio = new Audio("alarm.mp3")
           audio.play();
        }
       

        return
      }
  
      const minutes = Math.floor(timeLeft / 60)
      const seconds = timeLeft % 60
      clockText.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`
      timeLeft--
    }, 1000)
  }
  
  function resetTimer(clockText) {
    clearInterval(intervalId)
    timeLeft = 25 * 60
    clockText.textContent = "25:00"
  }

  function startBreak(clockText){
      clearInterval(intervalId)
      timeLeft = 5 * 60
      clockText.textContent = "5:00"

  }

  function toggleSound(){
    const btnToggleSound = document.querySelector("#btn-toggle-sound")

    if(isSoundEnabled){
      isSoundEnabled = false;
      btnToggleSound.textContent = "Sound: Off"
    }else{
      isSoundEnabled = true;
      btnToggleSound.textContent = "Sound: On"
    }
  }

  function createPomodoroElements(){
    const pomodoroContent = document.createElement("div")
    const clockContainer = document.createElement("div")
    const btnSetBreak = document.createElement("button")
    const clockText = document.createElement("h1")
    const btnContainer = document.createElement("div");
    const btnStart = document.createElement("button")
    const btnReset = document.createElement("button")
    const btnToggleSound  = document.createElement("button")
    

    pomodoroContent.setAttribute("class", "pageContent")
    btnStart.setAttribute("id", "btn-start")
    btnReset.setAttribute("id", "btn-reset")
    btnStart.setAttribute("class", "color-success")
    btnReset.setAttribute("class", "color-danger")
    btnContainer.setAttribute("class", "btn-container")
    btnSetBreak.setAttribute("id", "btn-set-break")
    clockText.setAttribute("id", "clock-text")
    btnToggleSound.setAttribute("id", "btn-toggle-sound")
    btnToggleSound.setAttribute("title", "Toggle sound on or off for the alert");



    clockText.textContent = "25:00"
    btnStart.textContent = "Start"
    btnReset.textContent = "Reset"
    btnSetBreak.textContent = "Take a Break"
    btnToggleSound.textContent = "Sound: On"

    btnContainer.appendChild(btnStart)
    btnContainer.appendChild(btnReset)
    btnContainer.appendChild(btnSetBreak);
    btnContainer.appendChild(btnToggleSound);
    clockContainer.appendChild(clockText)
    pomodoroContent.appendChild(clockContainer)
    pomodoroContent.appendChild(btnContainer)


    btnStart.addEventListener("click", () => startTimer(clockText))
    btnReset.addEventListener("click", () => resetTimer(clockText))
    btnSetBreak.addEventListener("click", () => startBreak(clockText))
    btnToggleSound.addEventListener("click", () => toggleSound())

    return pomodoroContent

    
    
}


function renderPomodoroPage(){
    renderHeader("Pomodoro Timer", "", "rgba(255, 159, 91, 0.3)", "rgba(255, 159, 91, 1)")
    const pomodoroContent = createPomodoroElements()
    const app = document.querySelector("#app")
    app.innerHTML = ""
    app.appendChild(pomodoroContent)

}



export {renderPomodoroPage}