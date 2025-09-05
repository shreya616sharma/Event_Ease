const carousel = document.getElementById('image-carousel');
const items = carousel.getElementsByClassName('carousel-item');
let currentItem = 0;

function cycleItems() {
    // Hide current item
    items[currentItem].classList.remove('active');

    // Move to next item
    currentItem = (currentItem + 1) % items.length;

    // Show next item
    items[currentItem].classList.add('active');
}

setInterval(cycleItems, 3000); // Change image every 3 seconds

// Show events section on clicking Events nav link
document.getElementById('nav-events').addEventListener('click', function(event) {
    event.preventDefault();
    // Hide hero section and features section
    document.querySelector('.hero-section').style.display = 'none';
    document.querySelector('.features-section').style.display = 'none';
    // Show events section
});
