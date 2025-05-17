import { renderHeader } from "../components/header";

function createPomodoroElements(){
    const pomodoroContent = document.createElement("div");
    const clockContainer = document.createElement("div");
    
}

function renderPomodoroPage(){
    renderHeader("Pomodoro Timer", "", "rgba(255, 159, 91, 0.3)", "rgba(255, 159, 91, 1)")

    const app = document.querySelector("#app");
    app.innerHTML = "";
    app.textContent = "Pomodoro Timer";
}

function setEventListeners(){

}

export {renderPomodoroPage};