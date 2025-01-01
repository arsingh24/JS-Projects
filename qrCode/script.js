const btn = document.querySelector('#btn');
const input = document.querySelector('#input');
const qrCode = document.querySelector('#img');


btn.addEventListener('click', ()=>{
    let inputValue = input.value;
    console.log(inputValue)
    console.log("Namaste")
    // console.log(qrc);
    
    if(!inputValue){
        alert("Enter text or link");
    }
    else{
        qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    }
})