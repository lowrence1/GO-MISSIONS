const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header__nav");
  toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headNav.classList.toggle("open");
});

const Tigas = document.querySelector(".header");
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 50) {
    Tigas.classList.add("blue");
  } else {
    Tigas.classList.remove("blue");
  }
});