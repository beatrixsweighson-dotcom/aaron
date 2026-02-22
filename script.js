/* ================= NAVBAR: Hide on scroll down, show on scroll up ================= */
let prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
  if (prevScrollPos > currentScrollPos) {
    // scrolling up
    navbar.style.top = '0';
  } else {
    // scrolling down
    navbar.style.top = '-80px';
  }
  prevScrollPos = currentScrollPos;
});

/* ================= MOBILE MENU TOGGLE ================= */
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Close menu when clicking a link (mobile UX improvement)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
    });
  });
}

/* ================= OPTIONAL: Smooth Scroll for Anchor Links ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      window.scrollTo({
        top: targetEl.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});
