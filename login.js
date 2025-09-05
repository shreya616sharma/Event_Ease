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
