// Toggle menu (optional, kalau mau mobile menu buka/tutup)
const navToggle = document.querySelector(".logo");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
