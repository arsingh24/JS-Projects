const counters = document.querySelectorAll('.counter')

counters.forEach(counter =>{
    counter.innerHTML = '0';
    let target = +counter.getAttribute('data-target');
    // console.log(target);
    let count = 0;
    function increment(){
        if(count<target){
            count+=1;
            counter.innerText = count;
            setInterval(increment,100)
        }
        else{
            counter.innerText =target;
        }
    }
    increment();
})