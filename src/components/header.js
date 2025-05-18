import { renderHomePage } from "../pages/home"

function createHeader(title, subTitle, color, textColor = "#282826"){
    const header = document.createElement("header")
    const headerContent = document.createElement("div")
    const pageTitleEl = document.createElement("h1")
    const subTitleEl = document.createElement("p")
    const btnHome = document.createElement("button")

    headerContent.setAttribute("id", "header-content")
    pageTitleEl.setAttribute("id", "header-title")
    subTitleEl.setAttribute("id", "header-subtitle")
    btnHome.setAttribute("id", "btn-home")
    
    pageTitleEl.textContent = title
    subTitleEl.textContent = subTitle
    btnHome.textContent = "Home"
    
    pageTitleEl.style.color = textColor
    header.style.backgroundColor = color

    btnHome.addEventListener("click", () => {
        renderHomePage()
    })

    
    headerContent.appendChild(pageTitleEl)
    headerContent.appendChild(subTitleEl)

    headerContent.appendChild(btnHome)
    header.appendChild(headerContent)
    return header
    
}


function renderHeader(title, subTitle, color, textColor){
    const body = document.body

    const existingHeader = document.querySelector("header")

    if (existingHeader) {
        existingHeader.remove()
    }
    const header = createHeader(title, subTitle, color, textColor)
    body.prepend(header)
}


export { renderHeader }