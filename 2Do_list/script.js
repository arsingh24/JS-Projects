const text = document.querySelector('.inputBox');
const btn = document.querySelector('#btn');
const list = document.querySelector('#list')

// array
let arr= [];

// click on add
btn.addEventListener('click',addText)

// takes input from the input and saves in array
function addText(){
    const li = document.createElement("li");
    // console.log(text.value);
    let task = text.value;
    // console.log(task," oooo");
    if(text.value ===""){
        alert("Enter a task first")
        let p = document.createElement("h2")
        let msg = "Enter a task first!!";
        p.className="msg";
        list.append(msg);
        // console.log(p);
        
    }
    else{
        // list.appendChild(li);
        // li.append(task);
        arr.push({text:task,id:arr.length});
        console.log(arr)
        text.value="";
        render()
        saveData();
        // let span = document.createElement("span");
        // span.innerHTML="<img src=./delete-02-stroke-rounded.svg>";
        // li.append(span)
        // console.log(span);
        // console.log(li);
        
    }
}

// function to store data in array and append it on web
 function render(){
    const li = document.createElement("li");
    for(let i = 0; i<arr.length;i++){
        const text =arr[i].text;
        const id =arr[i].id;
        list.appendChild(li);
        li.append(text);
        let span = document.createElement("span");
        span.innerHTML=`<img src=./delete-02-stroke-rounded.svg></div>`;
        li.append(span)
        li.querySelector('span').addEventListener("click",()=>{
            li.remove();
        })
    }
 }

 
// function deletefun(id){
//    console.log(id," rrr");
  


// }


list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        console.log(e.target);
        saveData();
        
    }
},false);



function saveData(){
    localStorage.setItem("data",list.innerHTML);
}

function showData(){
    list.innerHTML = localStorage.getItem("data")
}
showData();