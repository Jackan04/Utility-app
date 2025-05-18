import QRCode from 'qrcode'
import { renderHeader } from "../components/header"


function generateQrCode(inputUrl){
    const canvas = document.createElement("canvas")

    QRCode.toCanvas(canvas, inputUrl, {width: 300})
    const content = document.querySelector(".pageContent")
    content.appendChild(canvas)
}

function createElements(){
    const content = document.createElement("div")
    const inputURL = document.createElement("input")
    const btnCreateCode = document.createElement("button")

    content.setAttribute("class", "pageContent")
    inputURL.setAttribute("id", "inputUrl")
    inputURL.setAttribute("placeholder", "Enter a URL here")
    btnCreateCode.setAttribute("id", "btnCreateCode")
    btnCreateCode.setAttribute("class", "color-success")

    btnCreateCode.textContent = "Create QR Code"

    content.appendChild(inputURL)
    content.appendChild(btnCreateCode)

    

    return content

}

function downloadQrCode(){
    const canvas = document.querySelector("canvas") 
    const link = document.createElement("a")
    link.download = "qrcode.png"
    link.href = canvas.toDataURL("image/png")
    link.click()

}

function renderQrCodePage(){
    const app = document.querySelector("#app")
    app.innerHTML = ""
    renderHeader("QR Code Generator", "", "rgba(57.3%, 35.3%, 82.7%, 0.3)", "rgba(57.3%, 35.3%, 82.7%, 1)", )
    const content = createElements()
    app.appendChild(content)

    const btnCreateCode = document.querySelector("#btnCreateCode")
    const inputUrl = document.querySelector("#inputUrl")
    
    btnCreateCode.addEventListener("click", () => {
        
        if(inputUrl.value){
            content.innerHTML = ""
            generateQrCode(inputUrl.value)
            const btnDownload = document.createElement("button")
            const btnResetPage = document.createElement("button")
            btnDownload.setAttribute("id", "btnDownloadQrCode")
            btnDownload.setAttribute("class", "color-blue")
            btnResetPage.setAttribute("class", "color-warning")
            btnDownload.textContent = "Download as PNG"
            btnResetPage.textContent = "Reset"
            
            content.appendChild(btnDownload)
            content.appendChild(btnResetPage)

            btnDownload.addEventListener("click", () => {downloadQrCode()})
            btnResetPage.addEventListener("click", () => {renderQrCodePage()})
        }else{
            return;
        }
        
        
    })

    

}

export {renderQrCodePage}