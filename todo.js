const toDoForm = document.querySelector(".js-toDoForm"),
   toDoInput = toDoForm.querySelector("input"),
   toDoList = document.querySelector(".js-toDoList");

const TODO_LIST_LS = "toDoList";
let arr_toDo = [];

init();

function init() {
   loadToDoList();
   toDoForm.addEventListener(SUBMIT, handlingSubmit);
}

function loadToDoList() {
   const typedToDoList = localStorage.getItem(TODO_LIST_LS);
   if (typedToDoList !== null) {
      const parsedToDo = JSON.parse(typedToDoList);
      parsedToDo.forEach(function(toDo) {
         writeToDo(toDo.text); // you need to re-code cuz it's not practical_
      });
   }
}

function handlingSubmit(event) {
   event.preventDefault();
   const inputValue = toDoInput.value;
   toDoInput.value = "";
   writeToDo(inputValue);
}

function writeToDo(inputValue) {
   const newList = document.createElement("li");
   const delBtn = document.createElement("button");
   delBtn.innerText = "❌";
   delBtn.addEventListener("click", deleteToDo);
   const addedList = document.createElement("span");
   addedList.innerHTML = inputValue; // What is the different innerText and innerHTML?

   const newId = arr_toDo.length + 1;

   newList.appendChild(addedList);
   newList.appendChild(delBtn);
   toDoList.appendChild(newList);

   newList.id = newId;

   const obj_toDo = {
      text: inputValue,
      id: newId
   };
   arr_toDo.push(obj_toDo);
   saveToDoList_LS();
}

function saveToDoList_LS() {
   localStorage.setItem(TODO_LIST_LS, JSON.stringify(arr_toDo));
}

function deleteToDo(event) {
   const targetBtn = event.target;
   const targetList = targetBtn.parentNode;
   toDoList.removeChild(targetList);

   const cleanToDoList = arr_toDo.filter(function(arr_toDo) {
      return arr_toDo.id !== parseInt(targetList.id);
   });

   arr_toDo = cleanToDoList;
   saveToDoList_LS();
}
