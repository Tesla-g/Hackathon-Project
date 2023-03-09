const sidemenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const sidebar = document.querySelector(".sidebar");
menuBtn.addEventListener("click", () => {
  sidemenu.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  sidemenu.style.display = "none";
});
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});
// sidebar.addEventListener("click", () => {
//   sidebar.querySelector("a:nth-child(1)").classList.toggle("active");
//   sidebar.querySelector("a:nth-child(2)").classList.toggle("active");
//   sidebar.querySelector("a:nth-child(3)").classList.toggle("active");
//   sidebar.querySelector("a:nth-child(4)").classList.toggle("active");
// });
