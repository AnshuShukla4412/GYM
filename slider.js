let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.box1');
    const totalSlides = slides.length;
    
    currentIndex += step;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const box = document.querySelector('.box');
    box.style.transform = `translateX(-${currentIndex * 100}%)`;
}
