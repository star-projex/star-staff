document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Simple role-based redirection (this should be handled by backend in real-world)
    if (username === 'manager' && password === 'password' && role === 'manager') {
        window.location.href = 'manager.html';  // Redirect to Manager Dashboard
    } else if (username === 'employee' && password === 'password' && role === 'employee') {
        window.location.href = 'employee.html';  // Redirect to Employee Dashboard
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid username, password, or role.';
    }
});
