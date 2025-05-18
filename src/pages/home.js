import utilities from "../data/utilities";
import { renderPomodoroPage } from "./pomodoro.js";
import { renderHeader } from "../components/header.js";

function createUtilityCard(title, desc, color, id){
    const card = document.createElement("div");
    const titleElement = document.createElement("h3");
    const descElement = document.createElement("p");
    
    titleElement.textContent = title;
    descElement.textContent = desc;
    
    titleElement.style.color = color;
    card.setAttribute("id", id);

    card.appendChild(titleElement);
    card.appendChild(descElement);


    return card;

    
}

function createHomeElements(){
    const content = document.createElement("div");
    content.setAttribute("id", "homePageContent");

    utilities.forEach(({ title, description, color, id }) => {
        const card = createUtilityCard(title, description, color, id);
        card.classList.add("utilityCard");
        content.appendChild(card);
    });

    return content;
}

function renderHomePage(){
    renderHeader("Utility App", "A collection of handy tools, all in one place.", "#F0F0F2");
 
    const app = document.querySelector("#app");
    app.innerHTML = "";

    const homeElements = createHomeElements();

    app.appendChild(homeElements);

    setEventListeners();

}

function setEventListeners(){
    document.addEventListener("click", function(event){
       
        const target = event.target.closest(".utilityCard");
       
        if(!target){
            return;
        }
        const id = target.id

     

        if(id === "pomodoroTimer"){
            renderPomodoroPage();
        }
        
    });
}

export {renderHomePage};