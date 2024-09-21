let list = document.querySelector('#list');
let inputBox = document.querySelector('#input-box')

// let addTask = document.querySelector('#addTask')
//  addTask.addEventListener('click',()=>{
//     if (inputBox===""){
//         alert('Add your Task')
//     }
//     else{
//         let task = document.createElement('li')
//         task.textContent=inputBox.value;
//         list.appendChild(task)

//         let span=document.createElement('span');
//         span.textContent='\u00d7'
//         task.appendChild(span)
//     }
//     inputBox.value=""
//     saveData()
// })

// when onclick is used
function addTask(){
    if (inputBox===""){
        alert('Add your Task')
    }
    else{
        let task = document.createElement('li')
        task.textContent=inputBox.value;
        list.appendChild(task)

        let span=document.createElement('span');
        span.textContent='\u00d7'
        task.appendChild(span)
    }
    inputBox.value=""
    saveData()
}

list.addEventListener("click",(e)=>{
    if(e.target.tagName=="LI"){
        e.target.classList.toggle('checked')
        saveData()
    }
    else if(e.target.tagName=='SPAN'){
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData(){
    localStorage.setItem("data",list.innerHTML)
}

function showTask(){
    list.innerHTML = localStorage.getItem("data");
}

showTask()