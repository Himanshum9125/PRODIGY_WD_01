const navbar = document.getElementById('navbar');
const hero = document.querySelector('.hero');
const heroInner = document.querySelector('.hero-inner');


window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


hero.addEventListener('mousemove', (e) => {
  const rect = hero.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width/2;
  const y = e.clientY - rect.top - rect.height/2;
  const rotateX = (y / rect.height) * 18;
  const rotateY = (x / rect.width) * 22;
  heroInner.style.transform =
    `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
});

hero.addEventListener('mouseleave', () => {
  heroInner.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
});
