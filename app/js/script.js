const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const menu = document.querySelector(".header__menu");

btnHamburger.addEventListener("click", function () {
  console.log("click hamburger");
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    body.classList.remove("scrollStop");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
    menu.classList.remove("fade-in");
    menu.classList.add("fade-out");
  } else {
    body.classList.add("scrollStop");
    header.classList.add("open");
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
    menu.classList.remove("fade-out");
    menu.classList.add("fade-in");
  }
});
