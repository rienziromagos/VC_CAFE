// Menu Icon Toggle Functionality
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Close menu when clicking a nav link
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Sticky Header on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Image Hover Animation Enhancement
const imageItems = document.querySelectorAll('.image-placeholder img');
imageItems.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.05)';
    });
    
    img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
    });
});

// Add responsive menu functionality
function handleResponsiveMenu() {
    if (window.innerWidth <= 768) {
        navbar.style.position = 'absolute';
        navbar.style.top = '100%';
        navbar.style.right = '-100%';
        navbar.style.width = '250px';
        navbar.style.background = 'var(--nav-color)';
        navbar.style.display = 'flex';
        navbar.style.flexDirection = 'column';
        navbar.style.transition = '0.3s ease';
        
        // When active class is applied through the menu icon click
        if (navbar.classList.contains('active')) {
            navbar.style.right = '0';
        }
    } else {
        navbar.style = ''; // Reset inline styles for larger screens
    }
}

handleResponsiveMenu();

window.addEventListener('resize', handleResponsiveMenu);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return; 
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

