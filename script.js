'use strict'
let incompleteArr=[];
let completeArr=[];
let inCount=-1;
const taskList=document.querySelector(".alltask");
const incomplete=document.querySelector(".incom");
const complete=document.querySelector(".com");
const inputField=document.querySelector("input");

taskList.innerHTML="";
incomplete.classList.add("active");

document.querySelector(".add").addEventListener("click",function(){
    if(inputField.value==""){
        alert("Please! enter a task");
    }else{
        const task=inputField.value;
    inputField.value="";
        if(incomplete.classList.contains("active")){
                const taskstr=`<div class="taskRow">
        <div class="name">${task}</div>
        <div class="btn">
            <button class="done btndo">Done</button>
            <button class="cancel btndo">Cancel</button>
        </div>
        </div>`;
            taskList.insertAdjacentHTML("beforeend",taskstr);
            
        }
   
    incompleteArr.push(task);
    inCount++;
    doneButton();
    
    cancelButton();
    }
    
});

incomplete.addEventListener("click",function(){
    incomplete.classList.add("active");
    complete.classList.remove("active");
    taskList.innerHTML="";
    inCount=-1
    incompleteArr.forEach(function(mov){
        taskList.insertAdjacentHTML("beforeend",`<div class="taskRow">
        <div class="name">${mov}</div>
        <div class="btn">
            <button class="done btndo">Done</button>
            <button class="cancel btndo">Cancel</button>
        </div>
     </div>`)
     inCount++;
     doneButton();
    
    cancelButton();
    })
});

complete.addEventListener("click",function(){
    incomplete.classList.remove("active");
    complete.classList.add("active");
    taskList.innerHTML="";
   
    completeArr.forEach(function(mov){
        taskList.insertAdjacentHTML("beforeend",`<div class="taskRow">
        <div class="name">${mov}</div>
        <div class="btn">
            <button class="done btndo">Completed ✔️</button>
        </div>
     </div>`)
    
    })
});
function doneButton(){
    let thebtn=document.querySelectorAll(".done")[inCount]
    if(thebtn){
        thebtn.addEventListener("click",function(){
        const text = thebtn.closest(".taskRow").querySelector(".name").textContent;
        thebtn.closest(".taskRow").remove();
        completeArr.push(text);
        let inde=incompleteArr.indexOf(text);
        incompleteArr.splice(inde,1);
        inCount--;
    });
    }
    
}
function cancelButton(){
    let thebtn=document.querySelectorAll(".cancel")[inCount]
    if(thebtn){
        thebtn.addEventListener("click",function(){
        const text = thebtn.closest(".taskRow").querySelector(".name").textContent;
        thebtn.closest(".taskRow").remove();
        let inde=incompleteArr.indexOf(text);
        incompleteArr.splice(inde,1);
        inCount--;
    });
    }
    
}