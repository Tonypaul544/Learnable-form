

let body = document.getElementByTagName("body");
let dog = document.querySelector(".Dog");
let cat = document.querySelector(".cat");
let Rabit = document.querySelector(".Rabit");
let monkey = document.querySelector(".monkey");

dog.addEventListener("click", dogBg);
function dogBg() {
  alert("hello world")
  // body.style.backgroundImage = "url('images/dog face.webp')";
}
alert("hello");