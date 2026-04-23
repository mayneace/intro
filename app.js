let hamburg = document.querySelector("#ham");

let mobilePop = document.querySelector("#mobileMenu");

let bar = document.querySelector("#bar");

let feature = document.querySelector("#feat");
let featuree = document.querySelector("#featt");

let fDrop = document.querySelector("#featDrop");
let fDropp = document.querySelector("#featDropp");

let compa = document.querySelector("#comp");
let compaa = document.querySelector("#compp");

let cDrop = document.querySelector("#compDrop");
let cDropp = document.querySelector("#compDropp");

let arrowedd = document.querySelector("#arrowed");
let arrowww = document.querySelector("#arroww");
let arrowd = document.querySelector("#arroweddd");

hamburg.addEventListener("click", () => {
  mobilePop.classList.toggle("opacity-0");
  mobilePop.classList.toggle("opacity-100");

  mobileMenu.classList.toggle("scale-x-0");
  mobileMenu.classList.toggle("scale-x-100");

  hamburg.classList.toggle("opacity-0");
});

feature.addEventListener("click", () => {
  fDrop.classList.toggle("hidden");
  arrow.classList.toggle("rotate-180");
});

featuree.addEventListener("click", (event) => {
  fDropp.classList.toggle("hidden");
  arrowww.classList.toggle("rotate-180");

  event.preventDefault();
});

compa.addEventListener("click", () => {
  cDrop.classList.toggle("hidden");
  arrowedd.classList.toggle("rotate-180");
});

compaa.addEventListener("click", (event) => {
  cDropp.classList.toggle("hidden");
  arrowd.classList.toggle("rotate-180");

  event.preventDefault();
});
