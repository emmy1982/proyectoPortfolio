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

// ============================================
// ANIMACIONES GSAP PREMIUM
// ============================================

gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Configuración general
gsap.config({
    nullTargetWarn: false
});

// ============================================
// ANIMACIONES DEL HERO
// ============================================

// Animación de entrada del Hero
const heroTimeline = gsap.timeline({
    onComplete: () => {
        // Limpiar propiedades transform después de la animación inicial
        gsap.set(['.hero-name', '.hero-subtitle'], { clearProps: 'transform' });
    }
});

heroTimeline
    .from('.hero-image', {
        scale: 1.3,
        duration: 2,
        ease: 'power3.out'
    })
    .from('.hero-name', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        letterSpacing: '-30px'
    }, '-=1.5')
    .from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.8')
    .from('.top-nav', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=1.5')
    .from('.social-sidebar', {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, '-=1.3');

// Efecto parallax en el Hero - Con fromTo para evitar saltos
gsap.fromTo('.hero-image', 
    {
        yPercent: 0
    },
    {
        yPercent: 50,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        }
    }
);

// Animación del nombre con parallax - Usando fromTo para suavidad
gsap.fromTo('.hero-name', 
    {
        y: 0,
        scale: 1
    },
    {
        y: -150,
        scale: 0.95,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        }
    }
);

// Animación del subtítulo con parallax - Usando fromTo
gsap.fromTo('.hero-subtitle', 
    {
        y: 0
    },
    {
        y: -100,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        }
    }
);

// ============================================
// ANIMACIONES DE LA SECCIÓN ABOUT
// ============================================

// Animación del título About con efecto de revelar letra por letra
const aboutTitle = document.querySelector('.about-title');
if (aboutTitle) {
    const words = aboutTitle.querySelectorAll('span');
    
    gsap.from(aboutTitle, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 70%',
            toggleActions: 'play none none none'
        }
    });
    
    if (words.length > 0) {
        gsap.from(words, {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.about-section',
                start: 'top 70%',
                toggleActions: 'play none none none'
            }
        });
    }
}

// Animación de la descripción y botón
gsap.from('.about-description', {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.about-description',
        start: 'top 80%',
        toggleActions: 'play none none none'
    }
});

gsap.from('.about-section .btn-work', {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out(1.7)',
    scrollTrigger: {
        trigger: '.about-section .btn-work',
        start: 'top 90%',
        toggleActions: 'play none none none'
    }
});

// ============================================
// ANIMACIONES DE LA SECCIÓN SERVICES
// ============================================

// Animación del label de servicios
gsap.from('.services-section .section-label', {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.services-section',
        start: 'top 70%',
        toggleActions: 'play none none none'
    }
});

// Animación de cada service item
document.querySelectorAll('.service-item').forEach((item, index) => {
    const number = item.querySelector('.service-number');
    const title = item.querySelector('.service-title');
    const description = item.querySelector('.service-description');
    const listItems = item.querySelectorAll('.service-list li');
    
    // Timeline para cada servicio
    const serviceTl = gsap.timeline({
        scrollTrigger: {
            trigger: item,
            start: 'top 75%',
            toggleActions: 'play none none none'
        }
    });
    
    serviceTl
        .from(number, {
            scale: 0,
            rotation: 180,
            opacity: 0,
            duration: 1,
            ease: 'back.out(1.7)'
        })
        .from(title, {
            x: -100,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.5')
        .from(description, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.5')
        .from(listItems, {
            x: -50,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out'
        }, '-=0.3');
});

// Animación hover mejorada para los list items
document.querySelectorAll('.service-list li').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            x: 10,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            x: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ============================================
// ANIMACIONES DE LA SECCIÓN PROJECTS
// ============================================

// Animación del label de proyectos
gsap.from('.projects-section .section-label', {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.projects-section',
        start: 'top 70%',
        toggleActions: 'play none none none'
    }
});

// Animación espectacular de la galería completa (contenedor)
gsap.from('.projects-grid', {
    scale: 0.85,
    y: 100,
    rotationX: -15,
    opacity: 0,
    duration: 1.5,
    ease: 'back.out(1.4)',
    transformOrigin: 'center center',
    scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 75%',
        toggleActions: 'play none none none'
    }
});

// ============================================
// ANIMACIONES DE LA SECCIÓN CONTACT
// ============================================

// Animación del label de contacto
gsap.from('.contact-section .section-label', {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 70%',
        toggleActions: 'play none none none'
    }
});

// Animación de la sección izquierda de contacto
gsap.from('.contact-title', {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 70%',
        toggleActions: 'play none none none'
    }
});

gsap.from('.contact-left .btn-work', {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    ease: 'back.out(1.7)',
    scrollTrigger: {
        trigger: '.contact-left .btn-work',
        start: 'top 90%',
        toggleActions: 'play none none none'
    }
});

// Animación de los items de información de contacto
document.querySelectorAll('.contact-info-item').forEach((item, index) => {
    gsap.from(item, {
        x: 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: index * 0.15,
        scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });
});

// Animación hover para los enlaces de contacto
document.querySelectorAll('.contact-link, .contact-social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, {
            x: 10,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    link.addEventListener('mouseleave', () => {
        gsap.to(link, {
            x: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// ============================================
// ANIMACIONES DE LOS BOTONES
// ============================================

// Efecto de magnetic button para todos los botones
document.querySelectorAll('.btn-work, .btn-contact-outline').forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    // Efecto magnético al mover el mouse
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(button, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.5)'
        });
    });
});


// ============================================
// ANIMACIONES DE LA NAVEGACIÓN
// ============================================

// Animación hover mejorada para los social links
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, {
            x: 10,
            duration: 0.3,
            ease: 'power2.out'
        });
        
        const icon = link.querySelector('i');
        gsap.to(icon, {
            rotation: 360,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
    
    link.addEventListener('mouseleave', () => {
        gsap.to(link, {
            x: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});



// ============================================
// SMOOTH SCROLL MEJORADO CON GSAP
// ============================================

// Registrar ScrollToPlugin
if (typeof ScrollToPlugin !== 'undefined') {
    gsap.registerPlugin(ScrollToPlugin);
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: {
                        y: target,
                        offsetY: 0
                    },
                    ease: 'power3.inOut'
                });
            }
        });
    });
} else {
    // Fallback al smooth scroll nativo si ScrollToPlugin no está disponible
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
}

console.log('%c🚀 GSAP Animations Loaded Successfully!', 'color: #ec523e; font-size: 16px; font-weight: bold;');

