const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    console.log({
        name: name,
        email: email,
        message: message
    });
    
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

document.addEventListener('click', function(e) {
    if (!menuIcon.contains(e.target) && !navbar.contains(e.target) && navbar.classList.contains('active')) {
        navbar.classList.remove('active');
    }
});