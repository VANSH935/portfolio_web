window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  document.querySelector('.progress-bar').style.width = scrollPercent + '%';
});

document.title = "Vansh's Portfolio";

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

const links = navLinks.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});
