const roleSelection = document.getElementById('role-selection');
const allForms = document.querySelectorAll('.form-container');
const forms ={'student-login': document.getElementById('student-login-form')};

// Show the role selection on initial load
roleSelection.style.display = 'block';

function showForm(formId) {
    roleSelection.style.display = 'none';
    allForms.forEach(form => form.style.display = 'none');
    document.getElementById(formId).style.display = 'block';
}

function switchView(currentFormId, targetFormId) {
    document.getElementById(currentFormId).style.display = 'none';
    document.getElementById(targetFormId).style.display = 'block';
}

function showRoleSelection() {
    allForms.forEach(form => form.style.display = 'none');
    roleSelection.style.display = 'block';
}
// --- NEW: Add logic to handle form submission ---
forms['student-login'].addEventListener('submit', function(event) {
event.preventDefault(); // Prevent the form from actually submitting
// In a real application, you would verify user credentials here
// For now, we will just redirect to the student dashboard
window.location.href = 'student_dashboard.html';
});
// Add event listener for club head login form
document.getElementById('club-head-login').addEventListener('submit', function(event) {
    event.preventDefault();
    // Redirect to club head dashboard
    window.location.href = 'Head_of_club_dashboard.html';
});
// Add event listener for admin login form
document.getElementById('admin-login').addEventListener('submit', function(event) {
    event.preventDefault();
    // Redirect to admin dashboard
    window.location.href = 'admin_dashboard.html';
});


// authentication for chitkara email
document.addEventListener('DOMContentLoaded', () => {
    // Select all inputs intended for email and set a Chitkara-only pattern
    const emailInputs = document.querySelectorAll('input[type="email"], input[name="email"]');

    // Define the regular expression pattern as a string
    // The backslash (\) is escaped with another backslash (\\) in the string literal
    const chitkaraPattern = "[a-zA-Z0-9.]+@chitkara\\.edu\\.in";

    // Apply the pattern and a helpful title to each matched input
    emailInputs.forEach(input => {
        try {
            input.setAttribute('pattern', chitkaraPattern);
            input.setAttribute('title', 'Please use your official @chitkara.edu.in email address.');
            // Ensure the input has a name so server-side scripts can read it if needed
            if (!input.name) input.name = 'email';
        } catch (e) {
            // ignore silently if node is not an element or attribute cannot be set
            console.warn('Could not set pattern on input', input, e);
        }
    });
});