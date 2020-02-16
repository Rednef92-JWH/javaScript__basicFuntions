const form = document.querySelector(".js-typedName");
const input = form.querySelector("input");
const greetings = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";
const SUBMIT = "submit";

init();

function init() {
   getName();
}

function getName() {
   const currentUser = localStorage.getItem(USER_LS);
   if (currentUser === null) {
      askForName();
   } else {
      writeGreetings(currentUser);
   }
}

function writeGreetings(name) {
   form.classList.remove(SHOWING_CN);
   greetings.classList.add(SHOWING_CN);
   greetings.innerText = `Hello, ${name}`;
}

function askForName() {
   form.classList.add(SHOWING_CN);
   form.addEventListener(SUBMIT, handlingSubmit);
}

function handlingSubmit(event) {
   event.preventDefault();
   const inputValue = input.value;
   writeGreetings(inputValue);
   saveName(inputValue);
}

function saveName(name) {
   localStorage.setItem(USER_LS, name);
}
