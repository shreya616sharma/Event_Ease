const roleSelection = document.getElementById('role-selection');
const allForms = document.querySelectorAll('.form-container');

// Show the role selection on initial load
if (roleSelection) roleSelection.style.display = 'block';

function showForm(formId) {
    if (roleSelection) roleSelection.style.display = 'none';
    allForms.forEach(form => form.style.display = 'none');
    const el = document.getElementById(formId);
    if (el) el.style.display = 'block';
}

function switchView(currentFormId, targetFormId) {
    const cur = document.getElementById(currentFormId);
    const targ = document.getElementById(targetFormId);
    if (cur) cur.style.display = 'none';
    if (targ) targ.style.display = 'block';
}

function showRoleSelection() {
    allForms.forEach(form => form.style.display = 'none');
    if (roleSelection) roleSelection.style.display = 'block';
}

// Prototype login behavior: set fake token, alert, and redirect
document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.getElementById('student-login');
    const clubHeadForm = document.getElementById('club-head-login');
    const adminForm = document.getElementById('admin-login');

    if (studentForm) {
        studentForm.addEventListener('submit', (event) => {
            event.preventDefault();
            // Prototype: store a fake token and redirect to student dashboard
            localStorage.setItem('userToken', 'fake-prototype-token-12345');
            // Optionally store a user display name for welcome messages
            localStorage.setItem('userName', 'Alex');
            console.log('PROTOTYPE: Simulating a successful student login...');
            // If login page was opened with a return query, send user back there
            const params = new URLSearchParams(window.location.search);
            const ret = params.get('return');
            if (ret) {
                try {
                    const decoded = decodeURIComponent(ret);
                    window.location.href = decoded;
                    return;
                } catch (e) {
                    // fallthrough
                }
            }
            // Default redirect to the student dashboard page (use the new my_dashboard page)
            window.location.href = 'student_dashboard.html';
        });
    }

    if (clubHeadForm) {
        clubHeadForm.addEventListener('submit', (event) => {
            event.preventDefault();
            localStorage.setItem('userToken', 'fake-clubhead-token-12345');
            console.log('PROTOTYPE: Simulating a successful club-head login...');
            window.location.href = 'Head_of_club_dashboard.html';
        });
    }

    if (adminForm) {
        adminForm.addEventListener('submit', (event) => {
            event.preventDefault();
            localStorage.setItem('userToken', 'fake-admin-token-12345');
            console.log('PROTOTYPE: Simulating a successful admin login...');
            window.location.href = 'admin_dashboard.html';
        });
    }
});
