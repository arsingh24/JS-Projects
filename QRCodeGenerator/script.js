let qrContainer = document.getElementById('qrContainer')
let qrText = document.getElementById('qrText')
let genBtn = document.getElementById('genBtn')
let downloadBtn = document.getElementById('downloadBtn')


generateQR=(qrtext)=>{
    qrContainer.innerHTML=""
   return new QRCode(qrContainer, {
        text: qrtext,
        width: 200,
        height: 200,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}
function downloadQR(){
    qrImage = document.querySelector("#qrContainer img")

    let imgSrc = qrImage.getAttribute('src')
    console.log(imgSrc)
    downloadBtn.setAttribute("href",imgSrc)
}
genBtn.addEventListener('click',(e)=>{
    let text = qrText.value;
    QRCode =generateQR(text)
    if(text.length>0){
        downloadBtn.classList.add('download-active')
    }
})

downloadBtn.addEventListener('click',downloadQR)