function createHomeElements(){
    const content = document.createElement("div");
    content.setAttribute("id", "content");
    content.textContent = "Home Page";

    return content;
}

function renderHomePage(){
    const app = document.querySelector("#app");
    app.innerHTML = "";

    const homeElements = createHomeElements();

    app.appendChild(homeElements);

}

export {renderHomePage};