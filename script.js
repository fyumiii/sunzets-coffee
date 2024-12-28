// Mengambil elemen hamburger menu dan navbar-nav
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('#hamburger-menu');
    const navbarNav = document.querySelector('.navbar-nav');
    
    // Toggle menu saat hamburger diklik
    hamburger.addEventListener('click', function(e) {
        navbarNav.classList.toggle('active');
        e.preventDefault();
    });
    
    // Menutup menu saat mengklik di luar menu
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
            navbarNav.classList.remove('active');
        }
    });

    // Menutup menu saat link navigasi diklik
    const navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarNav.classList.remove('active');
        });
    });
});