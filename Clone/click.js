// <!-- ===== FAQ SECTION ===== -->
const faqItems = document.querySelectorAll(".ttx-faq-item");

faqItems.forEach((item) => {
  const btn = item.querySelector(".ttx-faq-btn");

  btn.addEventListener("click", () => {
    // Close all others
    faqItems.forEach((other) => {
      if (other !== item) {
        other.classList.remove("active");
        other.querySelector(".ttx-faq-icon").textContent = "+";
      }
    });

    // Toggle current
    item.classList.toggle("active");
    const icon = item.querySelector(".ttx-faq-icon");
    icon.textContent = item.classList.contains("active") ? "−" : "+";
  });
});
// <!-- ===== FAQ SECTION ===== -->
