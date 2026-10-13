// Anna Bella — Portfólio Publicitário

// Navbar: estado ao rolar
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Menu mobile
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    const aberto = navLinks.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', aberto);
    navToggle.setAttribute('aria-expanded', aberto);
});

navLinks.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
    })
);

// Reveal on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Formulário de contato (feedback visual)
const form = document.getElementById('formContato');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', e => {
    e.preventDefault();

    if (!form.checkValidity()) {
        feedback.textContent = 'Preencha nome, e-mail e briefing antes de enviar.';
        return;
    }

    feedback.textContent = 'Briefing enviado. Retornaremos em até 24h úteis.';
    form.reset();
});
