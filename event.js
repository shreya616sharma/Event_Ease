document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-bar');
    const eventCards = document.querySelectorAll('.event-card-container');

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        eventCards.forEach(card => {
            const title = card.querySelector('.event-title').textContent.toLowerCase();
            const details = Array.from(card.querySelectorAll('.event-details')).map(p => p.textContent.toLowerCase()).join(' ');
            if (title.includes(query) || details.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Focus search bar if URL has #search
    if (window.location.hash === '#search') {
        searchInput.focus();
    }
});
