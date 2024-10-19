let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");
menu.addEventListener("click", () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});
