// SCROLL FUNCTION

const point = document.querySelector(".down-part-header-title");
console.log(point);

const nav = document.querySelector(".fix-header");
const btn = document.querySelector(".btn");

window.addEventListener("scroll", function () {
  if (window.scrollY > point.scrollHeight) {
    nav.classList.add("bg-color-scroll");
    btn.classList.add("btn-green");
  } else {
    nav.classList.remove("bg-color-scroll");
    btn.classList.remove("btn-green");
  }
});
