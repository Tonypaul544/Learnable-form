

const bodyBg = document.getElementById("bodyBg");
let dog = document.querySelectorAll(".Dog");
let cat = document.querySelectorAll(".cat");
let Rabit = document.querySelectorAll(".Rabit");
let monkey = document.querySelectorAll(".monkey");


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
