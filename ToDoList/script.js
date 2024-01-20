const inputbox=document.getElementById("input-box");
const listcontianer=document.getElementById("list_contianer");


function addtask(){
if(inputbox.value === ''){
console.log("enter a message!");
}
else{
  let li = document.createElement("li");
  li.innerHTML=inputbox.value;
  listcontianer.appendChild(li);
  // 
  let span=document.createElement("span");
  span.innerHTML="\u00d7";
  li.appendChild(span);

}
inputbox.value='';
savedata()
}

listcontianer.addEventListener("click", function(e){
  if(e.target.tagName == "LI"){
    e.target.classList.toggle("checked");
    savedata()
  }
  else if(e.target.tagName == "SPAN"){
e.target.parentElement.remove();
savedata()
  }
}, false);

function savedata(){
localStorage.setItem("data",listcontianer.innerHTML);
}
function showlist(){
  listcontianer.innerHTML=localStorage.getItem("data");

}
showlist();