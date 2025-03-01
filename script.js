// Typing animation
var typed = new Typed('#element', {
    strings: ['Web Developer'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    loop: true
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(39, 37, 37, 0.95)';
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    } else {
        nav.style.backgroundColor = 'rgb(39, 37, 37)';
        nav.style.boxShadow = 'none';
    }
});

// Form submission with validation
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }

    // Add your form submission logic here
    console.log('Form submitted:', { name, email, message });
    form.reset();
    alert('Thank you for your message! I will get back to you soon.');
});

// Animate cards on scroll and add hover effects
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Add hover effects after card appears
            entry.target.addEventListener('mouseenter', () => {
                entry.target.style.transform = 'scale(1.05) translateY(0)';
                entry.target.style.boxShadow = '0 0 30px rgba(193, 51, 212, 0.5)';
            });
            
            entry.target.addEventListener('mouseleave', () => {
                entry.target.style.transform = 'scale(1) translateY(0)';
                entry.target.style.boxShadow = '0 0 20px rgba(193, 51, 212, 0.3)';
            });
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.3s ease-out';
    observer.observe(card);
});