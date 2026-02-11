// Menu toggle
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// Close on link click (mobile)
document.querySelectorAll("#navLinks a").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    document.getElementById("navLinks").classList.remove("active");
  });
});

console.log("Responsive navbar with dropdown is live ✨");

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

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
  })
  .then(() => {
    form.style.display = "none";
    document.getElementById("thankYouMessage").style.display = "block";
  })
  .catch(() => {
    alert("❌ Message failed to send. Please try again.");
  });
});
