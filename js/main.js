
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
// HEADER ALL SECTION SHOW
document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
  
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScroll > lastScrollTop) {  
        header.classList.add('hidden');
      } else {   
        header.classList.remove('hidden');
      }
      lastScrollTop = currentScroll;
    });
    document.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', (event) => {
        setTimeout(() => {
          header.classList.remove('hidden');
        }, 300);
      });
    });
  });
  