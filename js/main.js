
// SLIDER NAVIGATION ACTIVE and  SLIDER 

document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide-item');
    const dots = document.querySelectorAll('.nav-dot');
    const totalSlides = slides.length;

    const backgrounds = [
        "../../imgages/slider/Slide Image-1.jpg",
        "../..//imgages/slider/Slide Image-2.jpg",
        "../..//imgages/slider/Slide Image-3.jpg",
        "../..//imgages/slider/Slide Image-4.jpg",
        "../..//imgages/slider/Slide Image-5.jpg"
    ];

    function updateSlides() {
        slides.forEach((slide, i) => {
            slide.style.backgroundImage = `url('${backgrounds[(currentIndex + i) % totalSlides]}')`;
            slide.style.zIndex = 1;
            slide.classList.remove('slide-1', 'slide-2', 'slide-3', 'slide-4', 'slide-5');
        });

        slides[0].classList.add('slide-1');
        slides[1].classList.add('slide-2');
        slides[2].classList.add('slide-3');
        slides[3].classList.add('slide-4');
        slides[4].classList.add('slide-5');

        slides[0].style.zIndex = 5;
        slides[1].style.zIndex = 4;
        slides[2].style.zIndex = 3;
        slides[3].style.zIndex = 2;
        slides[4].style.zIndex = 1;
    }

    function updateActiveDot(index) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    document.querySelector('.nav-arrow-right').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlides();
        updateActiveDot(currentIndex);
    });

    document.querySelector('.nav-arrow-left').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlides();
        updateActiveDot(currentIndex);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentIndex = index;
            updateSlides();
            updateActiveDot(currentIndex);
        });
    });

    updateSlides();
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
  


