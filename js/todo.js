const intputtype=document.querySelector(".inputbox");
const task=document.querySelector(".unorderlist");
function addTask(){
    if(intputtype.value === '')
    {
        alert("Please enter the task..!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML= intputtype.value;
        task.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    function clear(){
        intputtype.value="";
    }
    clear()
    storedate();
    
    }
    task.addEventListener("click",function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            storedate();
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            storedate();
        }
    },true);
    function storedate(){
        localStorage.setItem("data",task.innerHTML);
    }
    function showtask(){
       task.innerHTML= localStorage.getItem("data");
    }
    showtask();
    

