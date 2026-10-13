// Menu mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    hamburger.querySelector('i').className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});

// Seletor de idioma
const langSelect = document.getElementById('langSelect');
const langBtn = document.getElementById('langBtn');

langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = langSelect.classList.toggle('open');
    langBtn.setAttribute('aria-expanded', isOpen);
});

// Fecha menus ao clicar fora
document.addEventListener('click', (e) => {
    if (!langSelect.contains(e.target)) {
        langSelect.classList.remove('open');
        langBtn.setAttribute('aria-expanded', 'false');
    }
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.querySelector('i').className = 'fa-solid fa-bars';
    }
});

// Animação de entrada das seções ao rolar a página
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

revealElements.forEach((el) => revealObserver.observe(el));
