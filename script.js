// ── 1. SMOOTH SCROLL ──
// Makes clicking nav links glide instead of jump
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();                          // stop the instant jump
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' }); // glide to section
  });
});


// ── 2. FADE-IN ON SCROLL ──
// Sections start invisible and appear as you scroll to them
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // add class when in view
    }
  });
}, { threshold: 0.1 }); // trigger when 10% of section is visible

sections.forEach(section => observer.observe(section));


// ── 3. TYPEWRITER EFFECT ──
// Your name types itself out on page load
const name = "Miriam Kilonzo";
const h1 = document.querySelector('#hero h1');
h1.textContent = '';                     // clear the name first
let i = 0;

function typeWriter() {
  if (i < name.length) {
    h1.textContent += name.charAt(i);   // add one letter at a time
    i++;
    setTimeout(typeWriter, 80);          // 80ms between each letter
  }
}

typeWriter(); // kick it off on load