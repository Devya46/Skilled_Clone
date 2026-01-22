const courseBtn = document.querySelector(".nav-dropdown > a");
const dropdown = document.querySelector(".nav-dropdown");

courseBtn.addEventListener("click", function (e) {
  e.preventDefault();
  dropdown.classList.toggle("active");
});

// close when clicking outside
document.addEventListener("click", function (e) {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("active");
  }
});
