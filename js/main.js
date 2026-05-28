// Mobile menu toggle
const toggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => mobileMenu.classList.toggle('open'));
}

// Nav hide on scroll
const nav = document.getElementById('site-nav');
if (nav) {
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.style.transform = (y > lastY && y > 90) ? 'translateY(-100%)' : 'translateY(0)';
    lastY = y;
  }, { passive: true });
}

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = parseInt(e.target.dataset.delay || '0', 10);
        setTimeout(() => e.target.classList.add('in'), delay);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => io.observe(el));
}
