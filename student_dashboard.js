document.addEventListener('DOMContentLoaded', () => {
    // Function to open modal with event details
    function openEventModal(eventData) {
        // Create modal elements
        const modalOverlay = document.createElement('div');
        modalOverlay.classList.add('modal-overlay');
        modalOverlay.style.position = 'fixed';
        modalOverlay.style.top = '0';
        modalOverlay.style.left = '0';
        modalOverlay.style.width = '100%';
        modalOverlay.style.height = '100%';
        modalOverlay.style.backgroundColor = 'rgba(0,0,0,0.6)';
        modalOverlay.style.display = 'flex';
        modalOverlay.style.justifyContent = 'center';
        modalOverlay.style.alignItems = 'center';
        modalOverlay.style.zIndex = '1000';

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        modalContent.style.backgroundColor = 'white';
        modalContent.style.borderRadius = '1rem';
        modalContent.style.padding = '2rem';
        modalContent.style.maxWidth = '600px';
        modalContent.style.width = '90%';
        modalContent.style.position = 'relative';

        // Close button
        const closeButton = document.createElement('button');
        closeButton.textContent = '×';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '1rem';
        closeButton.style.right = '1.25rem';
        closeButton.style.background = 'none';
        closeButton.style.border = 'none';
        closeButton.style.fontSize = '2rem';
        closeButton.style.cursor = 'pointer';
        closeButton.style.color = '#9ca3af';
        closeButton.addEventListener('mouseenter', () => {
            closeButton.style.color = '#4b5563';
        });
        closeButton.addEventListener('mouseleave', () => {
            closeButton.style.color = '#9ca3af';
        });
        closeButton.addEventListener('click', () => {
            document.body.removeChild(modalOverlay);
        });

        // Event title
        const title = document.createElement('h2');
        title.textContent = eventData.title;
        title.style.color = '#7c3aed';
        title.style.marginBottom = '1rem';

        // Event poster
        const poster = document.createElement('img');
        poster.src = eventData.poster;
        poster.alt = eventData.title + ' poster';
        poster.style.width = '100%';
        poster.style.borderRadius = '0.75rem';
        poster.style.marginBottom = '1rem';

        // Event details list
        const detailsList = document.createElement('dl');
        detailsList.style.color = '#4b5563';

        const addDetail = (term, description) => {
            const dt = document.createElement('dt');
            dt.textContent = term;
            dt.style.fontWeight = '700';
            dt.style.marginTop = '0.5rem';
            const dd = document.createElement('dd');
            dd.textContent = description;
            dd.style.marginLeft = '0';
            dd.style.marginBottom = '0.5rem';
            detailsList.appendChild(dt);
            detailsList.appendChild(dd);
        };

        addDetail('Date & Time', eventData.date);
        addDetail('Venue', eventData.venue);
        addDetail('Organizing Club', eventData.club);
        addDetail('Description', eventData.description);

        modalContent.appendChild(closeButton);
        modalContent.appendChild(title);
        modalContent.appendChild(poster);
        modalContent.appendChild(detailsList);

        modalOverlay.appendChild(modalContent);
        document.body.appendChild(modalOverlay);
    }

    // Attach event listeners to all view buttons
    const viewButtons = document.querySelectorAll('.view-button');
    viewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.event-card');
            if (!card) return;
            const eventData = {
                poster: card.getAttribute('data-poster'),
                title: card.getAttribute('data-title'),
                date: card.getAttribute('data-date'),
                venue: card.getAttribute('data-venue'),
                club: card.getAttribute('data-club'),
                description: card.getAttribute('data-description'),
            };
            openEventModal(eventData);
        });
    });
});
