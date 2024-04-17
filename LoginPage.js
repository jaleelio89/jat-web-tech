document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const signupLink = document.getElementById('signup-link');
    const loginLink = document.getElementById('login-link');
    function toggleForms() {
        loginForm.classList.toggle('hidden');
        signupForm.classList.toggle('hidden');
    }
    signupLink.addEventListener('click', function() {
        toggleForms();
    });
    loginLink.addEventListener('click', function() {
        toggleForms();
    });
    function handleLogin(event) {
        event.preventDefault(); 
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username && password) {
            console.log('Login:', { username, password });
        } else {
            console.error('Username and password are required.');
        }
    }
    loginForm.addEventListener('submit', handleLogin);
    function handleSignup(event) {
        event.preventDefault(); 
        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;
        if (newUsername && newPassword) {
            console.log('Signup:', { newUsername, newPassword });
        } else {
            console.error('New username and password are required.');
        }
    }
    signupForm.addEventListener('submit', handleSignup);
});
