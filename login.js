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

// Password validation function
function validatePassword(password, confirmPassword, errorElementId) {
    const errorElement = document.getElementById(errorElementId);
    
    // Check if password meets minimum length
    if (password.length < 8) {
        errorElement.textContent = 'Password must be at least 8 characters long';
        errorElement.style.display = 'block';
        return false;
    }
    
    // Check if password contains at least one number
    if (!/\d/.test(password)) {
        errorElement.textContent = 'Password must contain at least one number';
        errorElement.style.display = 'block';
        return false;
    }
    
    // Check if password contains at least one letter
    if (!/[a-zA-Z]/.test(password)) {
        errorElement.textContent = 'Password must contain at least one letter';
        errorElement.style.display = 'block';
        return false;
    }
    
    // Check if passwords match
    if (password !== confirmPassword) {
        errorElement.textContent = 'Passwords do not match';
        errorElement.style.display = 'block';
        return false;
    }
    
    // If all validations pass, hide error message
    errorElement.style.display = 'none';
    return true;
}

// --- Login Form Event Listeners ---
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

// --- Signup Form Event Listeners ---
// Student signup form
document.getElementById('student-signup').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('student-password').value;
    const confirmPassword = document.getElementById('student-confirm-password').value;
    
    if (validatePassword(password, confirmPassword, 'student-password-error')) {
        // In a real application, you would send the signup data to a server
        alert('Student account created successfully!');
        // Switch to login form
        switchView('student-signup-form', 'student-login-form');
    }
});

// Club head signup form
document.getElementById('club-head-signup').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('club-head-password').value;
    const confirmPassword = document.getElementById('club-head-confirm-password').value;
    
    if (validatePassword(password, confirmPassword, 'club-head-password-error')) {
        // In a real application, you would send the signup data to a server
        alert('Club head account created successfully!');
        // Switch to login form
        switchView('club-head-signup-form', 'club-head-login-form');
    }
});

// Admin signup form
document.getElementById('admin-signup').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('admin-password').value;
    const confirmPassword = document.getElementById('admin-confirm-password').value;
    
    if (validatePassword(password, confirmPassword, 'admin-password-error')) {
        // In a real application, you would send the signup data to a server
        alert('Admin account created successfully!');
        // Switch to login form
        switchView('admin-signup-form', 'admin-login-form');
    }
});

