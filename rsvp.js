// rsvp.js
// Delegated click handlers for RSVP/Register/Join actions.
// Behavior:
// - If user is not logged in (no localStorage.userToken) -> redirect to login page (with optional return URL)
// - If user is logged in -> show a confirmation alert (RSVP sent / Request to join sent)

(function () {
	function isLoggedIn() {
		return !!localStorage.getItem('userToken');
	}

	// Build a return URL parameter so the login page can redirect back if desired
	function makeReturnUrl() {
		return encodeURIComponent(window.location.pathname + window.location.search);
	}

	document.addEventListener('click', function (e) {
		const btn = e.target.closest('a, button');
		if (!btn) return;

		// Do not interfere with view buttons (they open modals in some pages)
		if (btn.classList.contains('view-button')) return;

		const text = (btn.textContent || '').trim().toLowerCase();

		// Explicit hooks: class names or data attributes
		const isHeroCta = btn.classList.contains('hero-cta-button');
		const isRsvpBtn = btn.classList.contains('rsvp-button') || btn.dataset.rsvp === 'true';

		// Matches common register/rsvp/join phrases
		const isRsvpPhrase = /\b(rsvp|register)\b/.test(text) || isHeroCta || isRsvpBtn;
		const isJoin = /\bjoin\b/.test(text);

		if (!isRsvpPhrase && !isJoin) return; // nothing for us to do

		e.preventDefault();

		if (!isLoggedIn()) {
			// Redirect to login page and preserve return URL so user can come back after login
			const loginUrl = 'login.html?return=' + makeReturnUrl();
			// Redirect without native alert to avoid blocking UX
			window.location.href = loginUrl;
			return;
		}

		// Logged-in behavior: show friendly confirmation
		if (isJoin) {
			alert('Request to join sent!');
			return;
		}

		// RSVP/Register
		if (isRsvpPhrase) {
			alert('RSVP sent!');
			return;
		}
	});

	// Expose a helper if any page wants to call it programmatically
	window.showRsvpAlert = function (message = 'RSVP sent!') {
		if (!isLoggedIn()) {
			const loginUrl = 'login.html?return=' + makeReturnUrl();
			window.location.href = loginUrl;
			return;
		}
		alert(message);
	};
})();
