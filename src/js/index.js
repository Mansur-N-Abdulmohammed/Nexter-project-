const menu = document.querySelector(".menu");
const list = document.querySelector(".list");
// const sidebar = document.querySelector(".side-bar");
const item = document.querySelectorAll(".item");
const container = document.querySelector(".main-container");

item.forEach((i) => {
  i.addEventListener("click", function () {
    sidebar.classList.remove("open");
  });
});
