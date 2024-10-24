document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Hardcoded credentials for demonstration
    const correctUsername = "user123";
    const correctPassword = "pass123";

    // Get the input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the credentials are correct
    if (username === correctUsername && password === correctPassword) {
        window.location.href = "dashboard.html"; // Redirect to the dashboard page
    } else {
        document.getElementById('error-message').textContent = "Invalid username or password";
    }
});
