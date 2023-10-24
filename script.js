const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
    const inputValue = inputBox.value.trim();
    
    if (inputValue === '') {
      alert("You must write something");
      return;
    }
    
    const li = document.createElement("li");
    li.textContent = inputValue;
    
    const span = document.createElement('span');
    span.textContent = "\u00d7";
    
    li.appendChild(span);
    listContainer.appendChild(li);
    
    inputBox.value = '';
    saveData();
  }

listContainer.addEventListener("click",function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData() {
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

//Eventlister for Enter
inputBox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && inputBox.value.trim() !== '') {
      addTask();
    }
  });
