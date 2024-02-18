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

// ANIMATE SVG

const svgM = document.querySelectorAll("header svg g path");
console.log(svgM);

const svgMReturn = [];
// console.log(svgMReturn);

function svgAnimateReturn() {
  const blockLoop = setInterval(() => {
    const randNum = Math.floor(Math.random() * svgMReturn.length);
    svgMReturn[randNum].classList.remove("svg-animate");
    svgMReturn[randNum].classList.add("svg-animate-return");
    svgMReturn.pop(svgMReturn[randNum]);
    if (svgMReturn.length === 0) {
      clearInterval(blockLoop);
      svgAnimateStart();
    }
  }, 100);
  blockLoop;
}

function svgAnimateStart() {
  const svgAnimate = setInterval(() => {
    if (svgMReturn.length === 150) {
      clearInterval(svgAnimate);
      svgAnimateReturn();
    } else {
      const randNum = Math.floor(Math.random() * svgM.length);
      svgM[randNum].classList.add("svg-animate");
      svgMReturn.push(svgM[randNum]);
    }
  }, 10);
}

svgAnimateStart();
