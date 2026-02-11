// Menu toggle (accessible: button with aria-expanded)
var menuButton = document.getElementById("menuButton");
var navLinks = document.getElementById("navLinks");

function toggleMenu() {
  var isOpen = navLinks.classList.toggle("active");
  if (menuButton) {
    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  }
}

if (menuButton) {
  menuButton.addEventListener("click", toggleMenu);
}

// Close on link click (mobile) and scroll to section
document.querySelectorAll("#navLinks a").forEach(function (link) {
  link.addEventListener("click", function (e) {
    var href = this.getAttribute("href");
    if (href && href.startsWith("#") && href.length > 1) {
      e.preventDefault();
      var target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      navLinks.classList.remove("active");
      if (menuButton) {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open menu");
      }
    }
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
