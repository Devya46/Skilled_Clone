window.addEventListener("load", function () {
  const loader = document.getElementById("site-loader");

  loader.style.opacity = "0";
  loader.style.transition = "opacity 0.6s ease";

  setTimeout(() => {
    loader.style.display = "none";
  }, 600);
});
