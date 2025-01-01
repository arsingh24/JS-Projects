const text = document.querySelector('textarea')
const sentences = document.querySelector('[data-sentence-count]')
const paragraphs = document.querySelector('[data-paragraph-count]')
const characters = document.querySelector('[data-character-count]')
const words = document.querySelector('[data-word-count]')

console.log(text.value)

function updateCounts(){
    if(!text.value){
        resetCountS();
        return;
    }

    // words count
    const wordArr = text.value.split(" ")
    .filter((word)=>word!="");
    words.innerHTML = wordArr.length;

    // characters count
    characters.innerText = text.value.length;

    // sentences counts
    const sentenceArr =  text.value.split(/[.!]/);
    sentences.innerText =sentenceArr.length-1;

    // paragraph count
    const paragraphArr = text.value.split("\n")
    .filter((p)=>p.trim!="");
    paragraphs.innerText =paragraphArr.length;

}

function resetCountS(){
    words.textContent ="0";
    sentences.textContent ="0";
    characters.textContent ="0";
    paragraphs.textContent ="0";
}


text.addEventListener("input",updateCounts)