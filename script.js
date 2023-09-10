
const qrText = document.getElementById('qrText');
const qrImg = document.getElementById('qrImg');
const link = document.getElementById('link');
const ImgBox = document.getElementById('ImgBox');


function generateQR() {
    if(qrText.value === ''){
        alert("Type Something")
        return;
    }
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrText.value}`;
    link.href = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrText.value}`;
    ImgBox.style.display = 'block';
}

function downloadQR() {

}

// document.addEventListener("keydown", function(){
//     if(e.code === "Enter"){
//         generateQR()
//     }
// })
