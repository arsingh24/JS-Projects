const jaiShriRam = document.querySelector('#jaishriram');
const jagdambh = document.querySelector('#jagdambh');
const sitaRam = document.querySelector('#sitaram');
const applause = document.querySelector('#applause');
const goodMrng = document.querySelector('#goodmrng');


const audio_jaiShriRam = document.querySelector('#audio-jsr');
const audio_jagdambh = document.querySelector('#audio-jagdamb');
const audio_sitaRam = document.querySelector('#audio-sitaram');
const audio_applause = document.querySelector('#audio-applause');
const audio_goodMrng = document.querySelector('#audio-gdmrng');


jaiShriRam.addEventListener('click',()=>{
    stopPlay();
    console.log("Jai Shri Ram")
    audio_jaiShriRam.play();
})

jagdambh.addEventListener('click',()=>{
    stopPlay();
    console.log("Jagdambh");
    audio_jagdambh.play();
})
sitaRam.addEventListener('click',()=>{
    stopPlay();
    console.log("sitaRam");
    audio_sitaRam.play();
})
applause.addEventListener('click',()=>{
    stopPlay();
    console.log("applause");
    audio_applause.play();
})
goodMrng.addEventListener('click',()=>{
    stopPlay();
    console.log("goodMrng");
    audio_goodMrng.play();
})


function stopPlay(){
    audio_applause.pause();
    audio_applause.currentTime = 0;

    audio_goodMrng.pause();
    audio_goodMrng.currentTime = 0;

    audio_jagdambh.pause();
    audio_jagdambh.currentTime = 0;

    audio_jaiShriRam.pause();
    audio_jaiShriRam.currentTime = 0;

    audio_sitaRam.pause();
    audio_sitaRam.currentTime = 0;
}