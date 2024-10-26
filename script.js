document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const correctUsername = "user123";
    const correctPassword = "pass123";

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === correctUsername && password === correctPassword) {
        window.location.href = "dashboard.html"; // Redirect to the dashboard page
    } else {
        document.getElementById('error-message').textContent = "Invalid username or password";
    }
});
