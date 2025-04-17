// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add animation class to elements when they come into view
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.skill-item, .gallery-item, h2, .contact-form');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        
        if (elementPosition < screenPosition) {
            element.classList.add('fadeInUp');
        }
    });
};

// Run animation check on load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            
            // Send form data using fetch
            fetch('contact.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                // Show alert based on response
                alert(data.message);
                
                // Clear form if successful
                if (data.status === 'success') {
                    contactForm.reset();
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred. Please try again later.');
            });
        });
    }
});

// Navbar active state
document.addEventListener('DOMContentLoaded', function() {
    // Get current page URL
    const currentLocation = location.href;
    
    // Get all navbar links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    // Loop through links to find match
    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Initialize lightbox for gallery
if (typeof lightbox !== 'undefined') {
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'fadeDuration': 300
    });
} 