// Initial setup: show Registration and Login buttons
document.getElementById('register-btn').addEventListener('click', function() {
    document.getElementById('initial-buttons').style.display = 'none';
    document.getElementById('registration-form').style.display = 'block';
});

document.getElementById('login-btn').addEventListener('click', function() {
    document.getElementById('initial-buttons').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

document.getElementById('back-btn').addEventListener('click', function() {
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('initial-buttons').style.display = 'block';
});

// Registration Form Submission
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    // Store email and password in localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('balance', 0);

    // Show success message and redirect to login
    alert('Account created successfully!');
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

// Login Form Submission
document.getElementById('signin-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    // Check if email and password match
    if(localStorage.getItem('email') === email && localStorage.getItem('password') === password) {
        showDashboard(email);
    } else {
        alert('Invalid email or password!');
    }
});

// Show Dashboard
function showDashboard(email) {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('user-email').innerText = email;
    document.getElementById('balance').innerText = localStorage.getItem('balance');
}

// Withdrawal Button Click
document.getElementById('withdraw-btn').addEventListener('click', function() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('withdrawal-page').style.display = 'block';
});

// Back to Dashboard from Withdrawal
document.getElementById('back-to-dashboard').addEventListener('click', function() {
    document.getElementById('withdrawal-page').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
});

// Withdrawal Form Submission
document.getElementById('withdrawal-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const method = document.getElementById('payment-method').value;
    const accountInfo = document.getElementById('account-info').value;
    alert(`Withdrawal request submitted for ${method} to account: ${accountInfo}`);
    document.getElementById('withdrawal-page').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
});

// Task, Daily Task, and Video Earning buttons can have similar event listeners to perform specific tasks
document.getElementById('task-btn').addEventListener('click', function() {
    window.location.href = 'task.html'; // Redirect to task web app
});

document.getElementById('daily-task-btn').addEventListener('click', function() {
    window.location.href = 'daily-task.html'; // Redirect to daily task web app
});

document.getElementById('video-earning-btn').addEventListener('click', function() {
    window.location.href = 'video-earning.html'; // Redirect to video earning web app
});
