import { renderHeader } from "../components/header"

function generateQrCode(inputUrl){
    
}

function createElements(){
    const content = document.createElement("div")
    const inputURL = document.createElement("input")
    const btnCreateCode = document.createElement("button")

    content.setAttribute("class", "pageContent")
    inputURL.setAttribute("id", "inputUrl")
    btnCreateCode.setAttribute("id", "btnCreateCode")
    btnCreateCode.setAttribute("class", "color-success")

    btnCreateCode.textContent = "Generate QR Code"

    content.appendChild(inputURL)
    content.appendChild(btnCreateCode)

    return content

}

function renderQrCodePage(){
    const app = document.querySelector("#app")
    app.innerHTML = ""

    renderHeader("QR Code Generator", "", "rgba(57.3%, 35.3%, 82.7%, 0.3)", "rgba(57.3%, 35.3%, 82.7%, 1)", )
    
    const content = createElements()
    app.appendChild(content)

}

export {renderQrCodePage}