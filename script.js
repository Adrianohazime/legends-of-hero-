// ===========================
// LEGENDS OF HEROES — script.js
// ===========================

// ===== FLOCOS DE NEVE =====
const flakesContainer = document.getElementById('flakes');
const symbols = ['❄', '❅', '❆', '✦', '·'];

for (let i = 0; i < 25; i++) {
  const flake = document.createElement('span');
  flake.className = 'flake';
  flake.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  flake.style.left             = Math.random() * 100 + '%';
  flake.style.fontSize         = (0.8 + Math.random() * 1.5) + 'rem';
  flake.style.animationDuration = (8 + Math.random() * 12) + 's';
  flake.style.animationDelay   = (Math.random() * 10) + 's';
  flake.style.opacity          = 0.2 + Math.random() * 0.4;
  flakesContainer.appendChild(flake);
}

// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(r => observer.observe(r));

// ===== NAV ATIVO AO ROLAR =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = 'var(--blue)';
    }
  });
});
