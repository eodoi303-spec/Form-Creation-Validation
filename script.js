document.addEventListener('DOMContentLoaded', function () {
    // Form Selection
    const form = document.getElementById('registration-form');
    // Feedback Division Selection
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent actual form submission

        // Input Retrieval and Trimming
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize Validation Variables
        let isValid = true;
        const messages = [];

        // Username Validation
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email Validation (basic check: must include '@' and '.')
        if (!(email.includes('@') && email.includes('.'))) {
            isValid = false;
            messages.push('Please enter a valid email address (must include "@" and ".").');
        }

        // Password Validation
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Displaying Feedback
        feedbackDiv.style.display = 'block';

        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // green
            feedbackDiv.style.backgroundColor = '#d4edda';
            // Optionally clear the form
            form.reset();
        } else {
            // Join messages with <br> and show as HTML
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545'; // red
            feedbackDiv.style.backgroundColor = '#f8d7da';
        }
    });
});
