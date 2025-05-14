document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleGenres");
  const genreList = document.getElementById("gameGenres");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  // Toggle genres section
  toggleBtn.addEventListener("click", () => {
    genreList.classList.toggle("hidden");
    toggleBtn.textContent = genreList.classList.contains("hidden")
      ? "Show Popular Game Genres"
      : "Hide Game Genres";
  });

  // Toggle mobile navbar
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});


// Toggle navbar on mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Handle contact form submission
const form = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
      formStatus.textContent = `Thank you, ${name}! Your message has been received.`;
      form.reset();
    } else {
      formStatus.textContent = 'Please fill in all fields.';
    }
  });
}
