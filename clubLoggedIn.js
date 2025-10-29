// Wait for the page to be fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Get Login State & Nav Bar Elements ---
    const userToken = localStorage.getItem('userToken'); 
    
    const loginButton = document.getElementById('login-button');
    const logoutButton = document.getElementById('logout-button');
    const favoriteStars = document.querySelectorAll('.favorite-star'); // Get all stars

    // --- 2. Update Page based on Login State ---
    if (userToken) {
        //
        // ===== USER IS LOGGED IN =====
        //
        
        // A. Update Nav Bar
        if (loginButton) loginButton.style.display = 'none';
        if (logoutButton) logoutButton.style.display = 'block';

        // B. Add logout functionality
        if (logoutButton) {
            logoutButton.addEventListener('click', (event) => {
                event.preventDefault();
                localStorage.removeItem('userToken');
                localStorage.removeItem('userFavorites'); // Clear favorites on logout
                alert('Prototype: You are logged out.');
                window.location.reload(); // Reload to reset the page
            });
        }

        // C. Load user's saved favorites
        let favorites = JSON.parse(localStorage.getItem('userFavorites')) || [];

        // D. Setup Favorite Stars (they are only visible and functional when logged in)
        favoriteStars.forEach(star => {
            const clubId = star.dataset.clubId; // Get ID from HTML

            // *** CHANGED: Make the star visible ***
            star.style.display = 'block'; // Or 'inline', 'inline-block' etc.

            // Set the star's initial state
            if (favorites.includes(clubId)) {
                star.classList.add('favorited');
                star.textContent = '★';
            } else {
                star.textContent = '☆';
            }
            
            // *** CHANGED: Simplified click listener ***
            // We KNOW the user is logged in, so we don't need to check !userToken
            star.addEventListener('click', () => {
                // User is logged in, toggle the favorite
                toggleFavorite(star, clubId);
            });

            // Keyboard accessibility
            star.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    star.click();
                }
            });
        });

    } else {
        //
        // ===== USER IS LOGGED OUT =====
        //

        // A. Update Nav Bar
        if (loginButton) loginButton.style.display = 'block';
        if (logoutButton) logoutButton.style.display = 'none';

        // *** CHANGED: Hide all favorite stars ***
        favoriteStars.forEach(star => {
            star.style.display = 'none';
        });
    }

    // --- 4. Helper Function to Save Favorites ---
    // (This function is now only called when the user is logged in)
    function toggleFavorite(star, clubId) {
        let currentFavorites = JSON.parse(localStorage.getItem('userFavorites')) || [];

        if (currentFavorites.includes(clubId)) {
            // UN-favorite: Remove it
            currentFavorites = currentFavorites.filter(id => id !== clubId);
            star.classList.remove('favorited');
            star.textContent = '☆';
        } else {
            // FAVORITE: Add it
            currentFavorites.push(clubId);
            star.classList.add('favorited');
            star.textContent = '★';
        }
        
        localStorage.setItem('userFavorites', JSON.stringify(currentFavorites));
    }

    // --- 5. Modal Close Logic ---
    // (Still needed for your login modal, even if stars don't open it)
    const loginModal = document.getElementById('login-modal');
    const modalCloseBtn = loginModal.querySelector('.modal-close-btn');
    
    modalCloseBtn.addEventListener('click', () => {
        loginModal.classList.remove('active');
    });

    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.classList.remove('active');
        }
    });

    // --- 6. Search Functionality (no change needed) ---
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

}); // End of DOMContentLoaded