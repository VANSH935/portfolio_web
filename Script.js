// Theme Switcher (Dark Mode)

let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'active');
};

const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', null);
};

if (darkmode === "active") {
  enableDarkmode();
}

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode');
  if (darkmode !== "active") {
    enableDarkmode();
  } else {
    disableDarkmode();
  }
});

//  Mobile Menu Toggle


const menuToggle = document.getElementById('menu-toggle');
const closeMenu = document.getElementById('close-menu');
const navLinks = document.getElementById('nav-links');
const navItems = navLinks.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
  navLinks.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  navLinks.classList.remove('active');
});

navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Welcome Typing Animation

document.addEventListener("DOMContentLoaded", function () {
  new Typed('#element', {
    strings: ['Welcome To My Portfolio'],
    typeSpeed: 88,
    backSpeed: 75,
    loop: true
  });
});

// Smooth Scrolling on Anchor Click

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 90,
        behavior: 'smooth'
      });
    }
  });
});

// About Section Scroll Animation

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-active');
    } else {
      entry.target.classList.remove('animate-active');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.scroll-animate').forEach(el => {
  observer.observe(el);
});

// Skills Section Load Animation

window.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".ScrollAnimate");
  skills.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("animate-active");
    }, index * 300);
  });
});

//  PDF Modal Viewer

function viewPDF(pdfUrl) {
  const modal = document.getElementById('pdf-modal');
  const frame = document.getElementById('pdf-frame');
  frame.src = pdfUrl;
  modal.style.display = 'flex';
}

function closePDF() {
  const modal = document.getElementById('pdf-modal');
  modal.style.display = 'none';
  document.getElementById('pdf-frame').src = '';
}
