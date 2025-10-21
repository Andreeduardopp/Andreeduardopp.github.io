// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    document.body.classList.toggle('nav-open');
});

// Close the menu when a link is clicked
mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        document.body.classList.remove('nav-open');
    });
});

// Keep the footer year current
document.getElementById('year').textContent = new Date().getFullYear();
