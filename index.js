const burgerBtn = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav-list");
const navItems = document.querySelectorAll(".nav-item");

function burgerSwitch() {
  burgerBtn.classList.toggle("collapsed");
  nav.classList.toggle("collapsed");
  navList.classList.toggle("collapsed");
}
burgerBtn.addEventListener("click", burgerSwitch);

function closeMenu() {
  burgerBtn.classList.remove("collapsed");
  nav.classList.remove("collapsed");
  navList.classList.remove("collapsed");
}
navItems.forEach((el) => el.addEventListener("click", closeMenu));
