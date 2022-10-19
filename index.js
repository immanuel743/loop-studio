const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const mobileNav = document.querySelector(".nav__items");
const topBtn = document.querySelector(".top");
let i = 0;
const header = document.querySelector(".heading");
const speed = 50;
let txt = "Immersive experiences that deliver";
function typeWriter() {
  if (i < txt.length) {
    header.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

hamburger.addEventListener("click", function () {
  mobileNav.classList.add("mobile--active");
});
close.addEventListener("click", function () {
  mobileNav.classList.remove("mobile--active");
});

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    ? (topBtn.style.display = "block")
    : (topBtn.style.display = "none");
}
topBtn.addEventListener("click", topFunction);

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
