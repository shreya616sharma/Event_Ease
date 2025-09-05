// Simulate user login status (for demo, set to false)
let isLoggedIn = false;

const favoriteStars = document.querySelectorAll('.favorite-star');
const loginModal = document.getElementById('login-modal');
const modalCloseBtn = loginModal.querySelector('.modal-close-btn');

favoriteStars.forEach(star => {
    star.addEventListener('click', () => {
        if (!isLoggedIn) {
            loginModal.classList.add('active');
            loginModal.focus();
        } else {
            star.classList.toggle('favorited');
            star.textContent = star.classList.contains('favorited') ? '★' : '☆';
        }
    });
    star.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            star.click();
        }
    });
});

modalCloseBtn.addEventListener('click', () => {
    loginModal.classList.remove('active');
});

// Close modal on outside click
loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.classList.remove('active');
    }
});

// Search functionality
const searchInput = document.querySelector('.search-bar');
const clubCards = document.querySelectorAll('.club-card');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();
    clubCards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        const info = card.dataset.info.toLowerCase();
        if (name.includes(query) || info.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
