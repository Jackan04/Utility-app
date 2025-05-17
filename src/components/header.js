function createHeader(title, subTitle, color, textColor = "#282826"){
    const header = document.createElement("header");
    const headerContent = document.createElement("div");
    const pageTitleEl = document.createElement("h1");
    const subTitleEl = document.createElement("p");

    pageTitleEl.textContent = title;
    pageTitleEl.setAttribute("id", "header-title")
    subTitleEl.textContent = subTitle
    subTitleEl.setAttribute("id", "header-subtitle");
    pageTitleEl.style.color = textColor;
    header.style.backgroundColor = color;

    
    headerContent.appendChild(pageTitleEl);
    headerContent.appendChild(subTitleEl);

    header.appendChild(headerContent);
    return header;
    
}


function renderHeader(title, subTitle, color, textColor){
    const body = document.body;

    const existingHeader = document.querySelector("header");

    if (existingHeader) {
        existingHeader.remove();
    }
    const header = createHeader(title, subTitle, color, textColor);
    body.prepend(header);
}

export { renderHeader, createHeader }