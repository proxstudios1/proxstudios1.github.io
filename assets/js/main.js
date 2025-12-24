const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("siteNav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}
// Close menu after clicking a link (mobile)
document.querySelectorAll("#siteNav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
