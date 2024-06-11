
// SLIDER NAVIGATION ACTIVE

document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide-item');
    const dots = document.querySelectorAll('.nav-dot');
    const totalSlides = slides.length;

    function updateActiveDot(index) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    document.querySelector('.nav-arrow-right').addEventListener('click', function() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalSlides;
        slides[currentIndex].classList.add('active');
        updateActiveDot(currentIndex);
    });

    document.querySelector('.nav-arrow-left').addEventListener('click', function() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        slides[currentIndex].classList.add('active');
        updateActiveDot(currentIndex);
    });

   
    slides[currentIndex].classList.add('active');
    updateActiveDot(currentIndex);
});

// NEXT