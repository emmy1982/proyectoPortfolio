// Menú Hamburguesa
const hamburger = document.getElementById('hamburger');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose = document.getElementById('menuClose');
const menuLinks = document.querySelectorAll('.menu-link');
const topNav = document.querySelector('.top-nav');

// Abrir menú
hamburger.addEventListener('click', () => {
    menuOverlay.classList.add('active');
    hamburger.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevenir scroll
});

// Cerrar menú con botón X
menuClose.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = ''; // Restaurar scroll
});

// Cerrar menú al hacer clic en un enlace
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = ''; // Restaurar scroll
    });
});

// Cerrar menú con tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
        menuOverlay.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Efecto scroll en navegación
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        topNav.classList.add('scrolled');
    } else {
        topNav.classList.remove('scrolled');
    }
});

// Smooth scroll para los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

