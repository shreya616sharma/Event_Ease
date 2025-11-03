const roleSelection = document.getElementById('role-selection');
const allForms = document.querySelectorAll('.form-container');

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

document.addEventListener('DOMContentLoaded', () => {

    // --- References to LOGIN forms ---
    const studentForm = document.getElementById('student-login');
    const clubHeadForm = document.getElementById('club-head-login');
    const adminForm = document.getElementById('admin-login');
    
    // --- References to SIGNUP forms (using new HTML IDs) ---
    const studentSignupForm = document.getElementById('student-signup');
    const clubHeadSignupForm = document.getElementById('club-head-signup');
    const adminSignupForm = document.getElementById('admin-signup');
     // We'll handle this one later
    // --- Your existing LOGIN submit handlers ---
    if (studentForm) {
        studentForm.addEventListener('submit', (event) => {
            event.preventDefault();
            localStorage.setItem('userToken', 'fake-prototype-token-12345');
            localStorage.setItem('userName', 'Alex'); // Example name
            console.log('PROTOTYPE: Simulating a successful student login...');
            
            const params = new URLSearchParams(window.location.search);
            const ret = params.get('return');
            if (ret) {
                try {
                    const decoded = decodeURIComponent(ret);
                    window.location.href = decoded;
                    return;
                } catch (e) { /* fallthrough */ }
            }
            window.location.href = 'student_dashboard.html';
        });
    }
    if (clubHeadForm) {
        // ... (your club head login logic) ...
        clubHeadForm.addEventListener('submit', (event) => {
            event.preventDefault();
            localStorage.setItem('userToken', 'fake-clubhead-token-12345');
            console.log('PROTOTYPE: Simulating a successful club-head login...');
            window.location.href = 'Head_of_club_dashboard.html';
        });
    }
    if (adminForm) {
        // ... (your admin login logic) ...
         adminForm.addEventListener('submit', (event) => {
            event.preventDefault();
            localStorage.setItem('userToken', 'fake-admin-token-12345');
            console.log('PROTOTYPE: Simulating a successful admin login...');
            window.location.href = 'admin_dashboard.html';
        });
    }

    /**
     * A helper function to send data to our JSON server
     * @param {object} data - The JavaScript object to send
     */
    async function saveUserToServer(data) {
        try {
            // Assumes your JSON server is running and has a "users" endpoint
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // 1. Convert the JavaScript Object to a JSON String
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Server responded with an error');
            }

            const savedUser = await response.json();
            console.log('User saved to server:', savedUser);
            alert('Account created successfully! Login to proceed.');
            return savedUser; // Return the user data from server (with ID)

        } catch (error) {
            console.error('Error saving user:', error);
            alert('Error: Could not create account.');
            return null;
        }
    }

    // --- Student Signup Handler ---
    if (studentSignupForm) {
        studentSignupForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Stop page reload

            // 1. Create a JavaScript Object from form data
            // (Using `name` attributes from your HTML)
            const formData = {
                fullName: studentSignupForm.elements['full_name'].value,
                email: studentSignupForm.elements['email'].value,
                contact: studentSignupForm.elements['contact'].value,
                department: studentSignupForm.elements['department'].value,
                password: studentSignupForm.elements['password'].value,
                role: 'student' // Add the role
            };

            // 2. Send the object to the server
            const savedUser = await saveUserToServer(formData);

            // 3. If saved, log them in and redirect
            if (savedUser) {
                localStorage.setItem('userToken', 'fake-student-token-' + savedUser.id);
                localStorage.setItem('userName', savedUser.fullName);
                window.location.href = 'student_dashboard.html';
            }
        });
    }

    // --- NEW: Club Head Signup Handler ---
    if (clubHeadSignupForm) {
        clubHeadSignupForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Stop page reload

            // 1. Create a JavaScript Object from form data
            // (Using the new `id`s we added)
            const formData = {
                fullName: document.getElementById('club-head-name').value,
                email: document.getElementById('club-head-email').value,
                clubName: document.getElementById('club-head-clubname').value,
                password: document.getElementById('club-head-password').value,
                role: 'club-head'
            };

            // 2. Send the object to the server
            const savedUser = await saveUserToServer(formData);
            
            // 3. If saved, log them in and redirect
            if (savedUser) {
                localStorage.setItem('userToken', 'fake-clubhead-token-' + savedUser.id);
                localStorage.setItem('userName', savedUser.fullName);
                window.location.href = 'Head_of_club_dashboard.html';
            }
        });
    }
    // --- NEW: Admin Signup Handler ---
    if (adminSignupForm) {
        adminSignupForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Stop page reload});
            // 1. Create a JavaScript Object from form data
            // (Using the new `id`s we added)
            const formData = { 
                email: document.getElementById('admin-email').value,
                password: document.getElementById('admin-password').value,
                role: 'admin'
            };
            // 2. Send the object to the server
            const savedUser = await saveUserToServer(formData);
            // 3. If saved, log them in and redirect
            if (savedUser) {
                localStorage.setItem
                ('userToken', 'fake-admin-token-' + savedUser.id);
                localStorage.setItem('userName', 'Admin'); // No name field for admin
                window.location.href = 'admin_dashboard.html';
            }
        });
    }
});
