// Menu toggle
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// Close on link click (mobile)
document.querySelectorAll('#navLinks a').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    document.getElementById("navLinks").classList.remove("active");
  });
});

// Navbar scroll color change
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

console.log("Responsive navbar with scroll + dropdown is live ✨");

// Reveal on scroll
const animatedSections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

animatedSections.forEach(section => {
  observer.observe(section);
});
