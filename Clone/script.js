function openDetails() {
  document.getElementById("coursePopup").style.display = "flex";
}

function closeDetails() {
  document.getElementById("coursePopup").style.display = "none";
}
// ------------------

const openBtn = document.getElementById("openModal");
const modal = document.getElementById("instructorModal");
const closeBtn = document.querySelector(".close");

openBtn.onclick = () => {
  modal.style.display = "flex";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
