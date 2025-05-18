import { renderHomePage } from "../pages/home"

function createHeader(title, subTitle, color, textColor = "#282826", showHomeBtn = true) {
    const header = document.createElement("header");
    const headerContent = document.createElement("div");
    headerContent.setAttribute("id", "header-content");

    // Left
    const left = document.createElement("div");
    left.className = "header-left";
    if (showHomeBtn) {
        const btnHome = document.createElement("button");
        btnHome.setAttribute("id", "btn-home");
        btnHome.textContent = "Home";
        btnHome.addEventListener("click", () => renderHomePage());
        left.appendChild(btnHome);
    }

    // Center
    const center = document.createElement("div");
    center.className = "header-center";
    const pageTitleEl = document.createElement("h1");
    pageTitleEl.setAttribute("id", "header-title");
    pageTitleEl.textContent = title;
    pageTitleEl.style.color = textColor;
    const subTitleEl = document.createElement("p");
    subTitleEl.setAttribute("id", "header-subtitle");
    subTitleEl.textContent = subTitle;
    center.appendChild(pageTitleEl);
    center.appendChild(subTitleEl);

    // Right
    const right = document.createElement("div");
    right.className = "header-right";

    headerContent.appendChild(left);
    headerContent.appendChild(center);
    headerContent.appendChild(right);

    header.style.backgroundColor = color;
    header.appendChild(headerContent);
    return header;
}

function renderHeader(title, subTitle, color, textColor, showHomeBtn){
    const body = document.body

    const existingHeader = document.querySelector("header")

    if (existingHeader) {
        existingHeader.remove()
    }
    const header = createHeader(title, subTitle, color, textColor, showHomeBtn)
    body.prepend(header)
}

export { renderHeader }