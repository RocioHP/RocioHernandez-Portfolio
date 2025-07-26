const carousel = document.querySelector('.card-list');
const btnPrev = document.querySelector('.carousel-btn-prev');
const btnNext = document.querySelector('.carousel-btn-next');
const dots = document.querySelectorAll('.dot');

const cards = carousel.querySelectorAll('.carousel-card');
const cardWidth = cards[0].offsetWidth + 16; // 16px gap
const visibleCards = 3;
const totalCards = cards.length;

// Update active dot based on scroll position
function updateDots() {
    const scrollPosition = carousel.scrollLeft;
    const currentIndex = Math.round(scrollPosition / cardWidth);
    const activeIndex = Math.min(currentIndex, dots.length - 1);
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
    });
}

// Navigate to specific dot
function goToDot(index) {
    const targetScroll = index * cardWidth;
    carousel.scrollTo({ left: targetScroll, behavior: 'smooth' });
}

// Add click listeners to dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        goToDot(index);
    });
});

// Listen for scroll events to update dots
carousel.addEventListener('scroll', updateDots);

btnPrev.addEventListener('click', () => {
    // If at the first card, jump to the last set
    if (carousel.scrollLeft <= 0) {
        carousel.scrollTo({ left: cardWidth * (totalCards - visibleCards), behavior: 'smooth' });
    } else {
        carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
});

btnNext.addEventListener('click', () => {
    // If at or past the last set, jump to the first
    if (carousel.scrollLeft >= cardWidth * (totalCards - visibleCards)) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
});
