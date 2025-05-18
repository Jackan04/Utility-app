import { renderHeader } from "../components/header"

let intervalId
let timeLeft = 25 * 60 


function startTimer(clockText) {
   
  intervalId = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(intervalId)
        clockText.textContent = "Time's up!"
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

function createPomodoroElements(){
    const pomodoroContent = document.createElement("div")
    const clockContainer = document.createElement("div")
    const clockText = document.createElement("h1")
    const btnContainer = document.createElement("div");
    const btnStart = document.createElement("button")
    const btnReset = document.createElement("button")

    pomodoroContent.setAttribute("id", "pomodoroPageContent")
    btnStart.setAttribute("id", "btn-start")
    btnReset.setAttribute("id", "btn-reset")
    btnStart.setAttribute("class", "color-success")
    btnReset.setAttribute("class", "color-danger")
    btnContainer.setAttribute("class", "btn-container")

    clockText.textContent = "25:00"
    btnStart.textContent = "Start"
    btnReset.textContent = "Reset"

    btnContainer.appendChild(btnStart)
    btnContainer.appendChild(btnReset)
    clockContainer.appendChild(clockText)
    pomodoroContent.appendChild(clockContainer)
    pomodoroContent.appendChild(btnContainer)


    btnStart.addEventListener("click", () => startTimer(clockText))
    btnReset.addEventListener("click", () => resetTimer(clockText))

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