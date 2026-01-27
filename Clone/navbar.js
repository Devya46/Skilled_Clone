const courseBtn = document.querySelector(".nav-dropdown > a");
const dropdown = document.querySelector(".nav-dropdown");

courseBtn.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  dropdown.classList.toggle("active");
});

dropdown.addEventListener("click", function (e) {
  e.stopPropagation();
});

document.addEventListener("click", function () {
  dropdown.classList.remove("active");
});
