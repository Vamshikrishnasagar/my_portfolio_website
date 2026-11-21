// Smooth scrolling for every in-page link (nav, footer, buttons)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Scroll to top button
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (!scrollTopBtn) return;
    scrollTopBtn.classList.toggle('show', window.pageYOffset > 300);
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Skill tag hover effects
const skillTags = document.querySelectorAll('.skill-tag');

skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'translateY(-2px) scale(1.05)';
    });
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'translateY(0) scale(1)';
    });
});

// Ripple effect on buttons and cards
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    @keyframes ripple-animation {
        to { transform: scale(4); opacity: 0; }
    }
    .download-btn, .skill-tag, .language-item, .certification-card {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(rippleStyle);

function createRipple(event) {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const diameter = Math.max(rect.width, rect.height);

    const circle = document.createElement('span');
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - diameter / 2}px`;
    circle.style.top = `${event.clientY - rect.top - diameter / 2}px`;
    circle.classList.add('ripple');

    const old = element.querySelector('.ripple');
    if (old) old.remove();

    element.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
}

document.querySelectorAll('.download-btn, .skill-tag, .language-item, .certification-card')
    .forEach(element => element.addEventListener('click', createRipple));

// Current year in the footer
const yearEl = document.querySelector('.year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

