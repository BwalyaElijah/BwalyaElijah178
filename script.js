document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');

  toggle && toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      console.log('Contact form submitted:', Object.fromEntries(formData.entries()));
      alert('Thanks! Your message was received (demo).');
      form.reset();
    });
  }
});
