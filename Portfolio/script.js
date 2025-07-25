const carousel = document.querySelector('.card-list');
const btnPrev = document.querySelector('.carousel-btn-prev');
const btnNext = document.querySelector('.carousel-btn-next');

// Button scroll only
btnPrev.addEventListener('click', () => {
    const card = carousel.querySelector('.carousel-card');
    if (card) {
        carousel.scrollBy({ left: -card.offsetWidth - 16, behavior: 'smooth' });
    }
});

btnNext.addEventListener('click', () => {
    const card = carousel.querySelector('.carousel-card');
    if (card) {
        carousel.scrollBy({ left: card.offsetWidth + 16, behavior: 'smooth' });
    }
});
