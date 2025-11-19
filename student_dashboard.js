        document.addEventListener('DOMContentLoaded', () => {
            const authButton = document.getElementById('authButton');
            let isLoggedIn = false;

            /**
             * Updates the button's text and color class based on the authentication state.
             */
            function updateAuthButton() {
                if (isLoggedIn) {
                    authButton.textContent = 'Logout';
                    authButton.classList.remove('login-state');
                    authButton.classList.add('logout-state');
                } else {
                    authButton.textContent = 'Login';
                    authButton.classList.remove('logout-state');
                    authButton.classList.add('login-state');
                }
            }

            /**
             * Toggles the authentication state on click.
             */
            authButton.addEventListener('click', () => {
                isLoggedIn = !isLoggedIn; // Toggle the state
                updateAuthButton();      // Update the button appearance
                
                // Optional: Provide feedback to the user via console log
                console.log(`User is now ${isLoggedIn ? 'Logged In' : 'Logged Out'}.`);
            });

            // Initial call to set the button to the default 'Login' (logged out) state
            updateAuthButton();
        });