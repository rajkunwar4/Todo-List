const inputBox=document.querySelector('#input-box');
const listContainer=document.querySelector('#list-container');
const btn=document.querySelector('button');




//adding the value in the input field to the list
function addTask(){
    if(inputBox.value.trim()===''){
        alert("Enter your task!")
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        inputBox.value='';
        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
        
    }
    saveData();
    inputBox.focus();
}
btn.addEventListener('click',addTask);


//event handlers for the list container, when completed and for removing the items
listContainer.addEventListener('click',(e)=>{
    console.log(e.target.tagName);
    if(e.target.tagName=='LI'){
        e.target.classList.toggle('checked');
        saveData();
        
    }
    else if(e.target.tagName=='SPAN'){
        e.target.parentNode.remove();
        saveData();
        
    }
    
},false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();

