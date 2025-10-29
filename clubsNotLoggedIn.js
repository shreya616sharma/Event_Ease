// Simulate user login status (for demo, set to false)
let isLoggedIn = false;

const favoriteStars = document.querySelectorAll('.favorite-star');
const loginModal = document.getElementById('login-modal');
const modalCloseBtn = loginModal.querySelector('.modal-close-btn');

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

// Header toggle: show Login/Signup when not logged in, Logout when logged in
        (function () {
            function isLoggedIn() { return !!localStorage.getItem('userToken'); }
            document.addEventListener('DOMContentLoaded', () => {
                const headerAction = document.getElementById('header-action');
                if (!headerAction) return;
                if (isLoggedIn()) {
                    headerAction.textContent = 'Logout';
                    headerAction.href = '#';
                    headerAction.classList.add('logout-button');
                    headerAction.addEventListener('click', (e) => {
                        e.preventDefault();
                        localStorage.removeItem('userToken');
                        window.location.href = 'index.html';
                    });

                } else {
                    const returnUrl = encodeURIComponent(window.location.pathname + window.location.search);
                    headerAction.textContent = 'Login/Signup';
                    headerAction.href = 'login.html?return=' + returnUrl;
                }

                // Wire up favorite-star interactions (keyboard + click).
                // Handlers check the actual login state (localStorage) at click time.
                const stars = document.querySelectorAll('.favorite-star');
                const modal = document.getElementById('login-modal');
                if (stars && stars.length) {
                    stars.forEach(star => {
                        star.addEventListener('click', () => {
                            // Use the runtime login check function
                            if (!isLoggedIn()) {
                                // If a modal exists, open it; otherwise redirect to login with return URL
                                if (modal) {
                                    modal.classList.add('active');
                                    if (typeof modal.focus === 'function') modal.focus();
                                } else {
                                    const returnUrl = encodeURIComponent(window.location.pathname + window.location.search);
                                    window.location.href = 'login.html?return=' + returnUrl;
                                }
                                return;
                            }
                            // Logged-in: toggle favorite visual state
                            star.classList.toggle('favorited');
                            star.innerHTML = star.classList.contains('favorited') ? '★' : '☆';
                        });
                        star.addEventListener('keydown', (e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                star.click();
                            }
                        });
                    });
                }
            });
        })();