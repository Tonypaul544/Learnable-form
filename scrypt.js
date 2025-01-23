

const bodyBg = document.getElementById("bodyBg");
let dog = document.querySelector(".Dog");
let cat = document.querySelector(".cat");
let Rabit = document.querySelector(".Rabit");
let monkey = document.querySelector(".monkey");

dog.addEventListener("click", dogBg);
function dogBg() {
  bodyBg.style.backgroundImage = "url('images/dog face.webp')";
}

cat.addEventListener("click", catBg);
function catBg() {
  bodyBg.style.backgroundImage = "url('images/cat face 2.jpeg')";
}

Rabit.addEventListener("click", RabitBg);
function RabitBg() {
  bodyBg.style.backgroundImage = "url('images/Rabit face.jpeg')";
}

monkey.addEventListener("click", monkeyBg);
function monkeyBg() {
  bodyBg.style.backgroundImage = "url('images/monkey.jpeg')";
}


let email = document.getElementById("emailInput");
let comment = document.getElementById("commentInput");
// let name = document.getElementById("nameInput");

let submitBtn = document.querySelector(".submitBtn");

// submitBtn.addEventListener("click", submitwarning);
// function submitwarning() {
//     alert("fill the form");
// }



let dog2 = document.querySelector(".Dog2");
let cat2 = document.querySelector(".Cat2");
let Rabit2 = document.querySelector(".Rabit2");
let monkey2 = document.querySelector(".Monkey2");

dog2.addEventListener("click", dogBg2);
function dogBg2() {
  bodyBg.style.backgroundImage = "url('images/dog face.webp')";
}

cat2.addEventListener("click", catBg2);
function catBg2() {
  bodyBg.style.backgroundImage = "url('images/cat face 2.jpeg')";
}

Rabit2.addEventListener("click", RabitBg2);
function RabitBg2() {
  bodyBg.style.backgroundImage = "url('images/Rabit face.jpeg')";
}

monkey2.addEventListener("click", monkeyBg2);
function monkeyBg2() {
  bodyBg.style.backgroundImage = "url('images/monkey.jpeg')";
}
