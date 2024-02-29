// script.js

// Toggleable Figure Caption
document.addEventListener('DOMContentLoaded', function () {
    const toggleCaptionBtn = document.getElementById('toggleCaptionBtn');
    const figureCaption = document.querySelector('figure figcaption');

    if (toggleCaptionBtn && figureCaption) {
        toggleCaptionBtn.addEventListener('click', function () {
            figureCaption.classList.toggle('hidden');
        });
    }
});

// Scroll-to-Top Button
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        });
    }
});

