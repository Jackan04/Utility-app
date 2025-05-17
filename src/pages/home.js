import utilites from "../data/utilities";

function createUtilityCard(title, desc){
    const card = document.createElement("div");
    const titleElement = document.createElement("h3");
    const descElement = document.createElement("p");
    
    titleElement.textContent = title;
    descElement.textContent = desc;

    card.appendChild(titleElement);
    card.appendChild(descElement);

    return card;

    
}

function createHomeElements(){
    const content = document.createElement("div");
    content.setAttribute("id", "content");
    content.textContent = "Home Page";

    utilites.forEach(({ title, description }) => {
        const card = createUtilityCard(title, description);
        card.classList.add("utilityCard");
        content.appendChild(card);
    });

    return content;
}

function renderHomePage(){
 
    const app = document.querySelector("#app");
    app.innerHTML = "";

    const homeElements = createHomeElements();

    app.appendChild(homeElements);

}

export {renderHomePage};