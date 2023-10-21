// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// when ham-menu clicked
document.querySelector("#ham-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//clicks out of sidebar to hidden sidebar
const hamburger = document.querySelector("#ham-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
