// Navbar hamburger menü aç/kapat
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');
if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });
}

// Tema değiştirme
const themeBtn = document.querySelector('.theme-btn');
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
}

// Dil butonu (dummy)
const langBtn = document.querySelector('.lang-btn');
if (langBtn) {
    langBtn.addEventListener('click', () => {
        alert('Dil değiştirme özelliği yakında!');
    });
}

// İletişim butonu fonksiyonu
window.tiklandi = function() {
    window.location.href = "mailto:mnazarslan55@gmail.com";
};

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto slide every 2 seconds
document.addEventListener('DOMContentLoaded', function() {
    setInterval(nextSlide, 2000);
});

// Toggle contact section
function toggleContact() {
    const content = document.getElementById('contact-content');
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}