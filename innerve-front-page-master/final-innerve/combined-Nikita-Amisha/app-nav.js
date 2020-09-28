const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container-main");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});
