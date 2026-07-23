/* ==========================
   MOBILE NAVIGATION TOGGLE
========================== */
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
                navLinks.classList.remove('active');
            }
        });
    });
}

/* ==========================
   INTERACTIVE BUTTON & CARD EFFECTS
========================== */
const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-nav, .quick-card');

buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.96)';
    });
    
    button.addEventListener('mouseup', () => {
        button.style.transform = '';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = '';
    });
});

/* ==========================
   EXPANDABLE SERVICE CARDS
========================== */
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
    });
});

/* ==========================
   SMOOTH SCROLL ENHANCEMENT
========================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
