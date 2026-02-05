// Script.js - Simple interactions

document.addEventListener('DOMContentLoaded', () => {

    // Smooth scroll for navigation links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Reveal on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    });

    // Elements to animate
    const animatedElements = document.querySelectorAll('.section-header, .detail-card, .map-container, .dress-code .content-box, .rsvp-form-container');
    animatedElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});
