document.addEventListener('DOMContentLoaded', function () {
  // Mobile navigation toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const navLinks = document.querySelectorAll('.site-nav a');

  if (toggle) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // Close mobile nav when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });

  // Form submission with validation
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form values
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      // Basic validation
      if (!data.name || !data.email || !data.message) {
        alert('Please fill in all fields.');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      console.log('Contact form submitted:', data);
      alert('Thank you! Your message has been received. We will get back to you soon!');
      form.reset();
    });
  }
});
