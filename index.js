let btn=document.querySelector("#btn");
let text=document.querySelector("#search");
let task=document.querySelector(".task");
let item=[];
const addtask=()=>{
  console.log(text.value);
   console.log("btn was clicked")
  if(text.value===""){
    alert("enter some task");

  }
  else{
    let li=document.createElement("li");
    li.innerHTML=search.value;
    task.appendChild(li);

    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);

  }
  text.value="";
  savetask();

}

task.addEventListener("click",function(event){
    if(event.target.tagName==="LI")
        {(event.target.classList.toggle("checked"));
    savetask();}
    else if(event.target.tagName==="SPAN"){
        event.target.parentElement.remove();
        savetask();

    }
});
   


function savetask(){
    localStorage.setItem("data",task.innerHTML);
}
function showitem(){
    task.innerHTML=localStorage.getItem("data");
}
showitem();