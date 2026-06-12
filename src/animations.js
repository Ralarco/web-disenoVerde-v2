/**
 * Diseño Verde - Premium Visual Animations
 * Se encarga de:
 * 1. Splash Screen & Entrada de Header
 * 2. Comportamiento del Nav al hacer scroll (transparente -> oscuro)
 * 3. Intersection Observer para scroll reveals (.reveal-up, .reveal-left, .reveal-right, .reveal-scale)
 * 4. Control de Mobile Menu (abrir/cerrar)
 * 5. Control de Floating Labels del formulario de contacto
 * 6. Configuración premium de partículas de hojas (tsParticles)
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. SPLASH SCREEN & ENTRY ANIMATIONS ---
  const splashScreen = document.getElementById('splash-screen');
  const splashLogo = document.getElementById('splash-logo');
  const mainHeader = document.getElementById('main-header');
  const heroElements = document.querySelectorAll('.hero-element');

  // Animación de entrada para el logo del splash
  setTimeout(() => {
    if (splashLogo) {
      splashLogo.style.transform = 'scale(1) rotate(0deg)';
      splashLogo.style.opacity = '1';
    }
  }, 100);

  // Ocultar splash screen y revelar contenido principal
  setTimeout(() => {
    if (splashScreen) {
      splashScreen.style.opacity = '0';
      splashScreen.style.visibility = 'hidden';
    }
    
    setTimeout(() => {
      if (splashScreen) {
        splashScreen.style.display = 'none';
      }

      // Deslizar cabecera hacia abajo
      if (mainHeader) {
        mainHeader.style.transform = 'translateY(0)';
        mainHeader.style.opacity = '1';
      }

      // Staggered fade-in de elementos del Hero
      heroElements.forEach((el, index) => {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 300 + (index * 200));
      });
    }, 500);
  }, 1500);


  // --- 2. HEADER SCROLL BEHAVIOR ---
  const header = document.getElementById('main-header');
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Ejecución inicial


  // --- 3. INTERSECTION OBSERVER FOR SCROLL REVEALS ---
  const revealOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
  revealElements.forEach(el => {
    revealObserver.observe(el);
  });


  // --- 4. MOBILE MENU TOGGLE ---
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const icon = menuBtn.querySelector('.material-symbols-outlined');
      if (icon) {
        icon.textContent = mobileMenu.classList.contains('hidden') ? 'menu' : 'close';
      }
    });

    // Cerrar menú móvil al hacer clic en enlaces
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const icon = menuBtn.querySelector('.material-symbols-outlined');
        if (icon) {
          icon.textContent = 'menu';
        }
      });
    });
  }


  // --- 5. FLOATING LABELS INPUT STATE CHECK ---
  const formInputs = document.querySelectorAll('.floating-input, .floating-select');
  formInputs.forEach(input => {
    const checkValue = () => {
      if (input.value && input.value.trim() !== '') {
        input.classList.add('has-value');
      } else {
        input.classList.remove('has-value');
      }
    };
    input.addEventListener('input', checkValue);
    input.addEventListener('change', checkValue);
    checkValue(); // Ejecución inicial
  });


  // --- 6. TSPARTICLES PREMIUM CONFIGURATION (HOJAS DORADAS Y BLANCAS) ---
  if (typeof tsParticles !== 'undefined') {
    tsParticles.load("tsparticles", {
      fullScreen: { enable: false },
      particles: {
        number: { value: 0 },
        color: { value: ["#c8a96e", "#ffffff"] }, // Ámbar/dorado y blanco
        shape: {
          type: "image",
          options: {
            image: {
              src: "./images/leaf-particle.svg",
              width: 20,
              height: 28,
              replaceColor: true
            }
          }
        },
        opacity: { value: { min: 0.3, max: 0.7 } },
        size: { value: { min: 6, max: 14 } },
        rotate: {
          value: { min: 0, max: 360 },
          animation: { enable: true, speed: 8, sync: false }
        },
        move: { enable: true, speed: 1.5, outModes: "destroy" },
        life: {
          count: 1,
          duration: { value: 1.2 }
        }
      },
      interactivity: {
        events: {
          onHover: { enable: false }
        }
      },
      detectRetina: true
    }).then(container => {
      if (!container) return;
      
      let lastEmitTime = 0;
      const emitInterval = 45;
      const heroSection = document.getElementById('inicio');
      
      if (heroSection) {
        heroSection.addEventListener('mousemove', event => {
          const now = Date.now();
          if (now - lastEmitTime > emitInterval) {
            lastEmitTime = now;
            const rect = heroSection.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            
            for (let i = 0; i < 2; i++) {
              container.particles.addParticle({ x: x, y: y });
            }
          }
        });
      }
    });
  }
});
