function validateLogin() {
    // Get the entered username and password
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    // Fixed username and password
    const correctUsername = "admin";
    const correctPassword = "1234";

    // Check if the entered credentials are correct
    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        // Display success message
        document.getElementById('successMessage').textContent = "Login successful!";
        document.getElementById('errorMessage').textContent = "";

        // Redirect to admin.html
        window.location.href = "adding.html";
    } else {
        // Display error message
        document.getElementById('errorMessage').textContent = "Invalid username or password";
        document.getElementById('successMessage').textContent = "";

        // Show the error message section
        document.getElementById('loginResult').classList.remove('hidden');
    }
}
