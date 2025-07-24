document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { name: 'Project One', description: 'A cool project about web development.' },
        { name: 'Project Two', description: 'Another awesome project using JavaScript.' },
        { name: 'Project Three', description: 'A creative project with HTML and CSS.' }
    ];

    const projectsList = document.getElementById('projects-list');
    projects.forEach(project => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${project.name}</strong>: ${project.description}`;
        projectsList.appendChild(li);
    });

    // Carousel logic
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        // Create navigation buttons
        const leftBtn = document.createElement('button');
        leftBtn.className = 'carousel-nav left';
        leftBtn.innerHTML = '&#8592;';
        const rightBtn = document.createElement('button');
        rightBtn.className = 'carousel-nav right';
        rightBtn.innerHTML = '&#8594;';
        carousel.parentElement.appendChild(leftBtn);
        carousel.parentElement.appendChild(rightBtn);

        // Scroll logic
        let scrollAmount = 0;
        const card = carousel.querySelector('.carousel-card');
        const cardWidth = card ? card.offsetWidth + 32 : 340 + 32; // 32px gap
        const maxScroll = (carousel.children.length * cardWidth) - carousel.offsetWidth;

        function scrollCarousel(direction) {
            scrollAmount += direction * cardWidth;
            if (scrollAmount < 0) scrollAmount = 0;
            if (scrollAmount > maxScroll) scrollAmount = maxScroll;
            carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }

        leftBtn.addEventListener('click', () => scrollCarousel(-1));
        rightBtn.addEventListener('click', () => scrollCarousel(1));
    }
}); 