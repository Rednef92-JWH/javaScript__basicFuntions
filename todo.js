const toDoForm = document.querySelector(".js-toDoForm"),
   toDoInput = toDoForm.querySelector("input"),
   toDoList = document.querySelector(".js-toDoList");

const TODO_LIST_LS = "toDoList";

init();

function init() {
   loadToDoList();
   toDoForm.addEventListener(SUBMIT, handlingSubmit);
}

function loadToDoList() {
   const toDoList = localStorage.getItem(TODO_LIST_LS); // I'm not sure about this part__
   if (toDoList !== null) {
   }
}

function handlingSubmit(event) {
   event.preventDefault();
   const inputValue = toDoInput.value;
   writeToDo(inputValue);
   toDoInput.value = "";
}

function writeToDo(toDo) {
   const newList = document.createElement("li");
   const delBtn = document.createElement("button");
   delBtn.innerText = "❌";
   const addedList = document.createElement("span");
   addedList.innerHTML = toDo; // What is the different innerText and innerHTML?
   newList.appendChild(delBtn);
   newList.appendChild(addedList);
   toDoList.appendChild(newList);
}
