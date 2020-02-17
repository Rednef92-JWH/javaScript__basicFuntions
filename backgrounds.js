const body = document.querySelector("body");

const IMG_NUMBER = 3;

init();

function init() {
   const randomNumber = genNumber();
   changeImg(randomNumber);
}

function genNumber() {
   const randomNumber = Math.floor(Math.random() * IMG_NUMBER) + 1;
   return randomNumber;
}

function changeImg(imgNum) {
   const image = new Image();
   image.src = `images/${imgNum}.jpg`;
   image.classList.add("bgImage");
   body.appendChild(image);
}
