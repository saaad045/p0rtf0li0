// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate__animated');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        const animationName = element.getAttribute('data-animation');
        
        if (elementPosition < screenPosition && animationName) {
            element.style.animationName = animationName;
            element.style.opacity = '1';
        }
    });
}

// Initialize on load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Make tech icons interactive
document.querySelectorAll('.tech-icons i').forEach(icon => {
    icon.style.transition = 'transform 0.3s ease'; // Ensure smooth animation
    icon.style.transform = 'scale(1)'; // Set initial transform

    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.2)';
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
    });
});
