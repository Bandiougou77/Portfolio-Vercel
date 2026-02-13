// Navbar shadow on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    nav.style.boxShadow = window.scrollY > 20
        ? '0 5px 30px rgba(255,42,42,0.2)'
        : 'none';
});

