document.getElementById("loginOption").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("loginFields").style.display = "block";
    document.querySelector(".options").style.display = "none";
    document.getElementById("registerOption").style.display = "none";
    document.getElementById("forgotPassword").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
    document.querySelector('.video-background').style.display = 'block';
    document.querySelector('.background-image').style.display = 'none';
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Assuming the login is successful
    document.querySelector('.video-background').style.display = 'none';
    document.querySelector('.background-image').style.display = 'block';
    document.getElementById("registerFields").style.display = "none";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginOption").style.display = "none";
    document.getElementById("registerOption").style.display = "none";
    document.getElementById("loginFields").style.display = "none";
});

document.getElementById("registerOption").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("registerFields").style.display = "block";
    document.getElementById("registerForm").style.display = "block";
    document.getElementById("loginOption").style.display = "none";
    document.getElementById("registerOption").style.display = "none";
    document.getElementById("loginFields").style.display = "none";
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Assuming the registration is successful
    document.querySelector('.video-background').style.display = 'none';
    document.querySelector('.background-image').style.display = 'block';
    document.getElementById("registerFields").style.display = "none";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginOption").style.display = "none";
    document.getElementById("registerOption").style.display = "none";
    document.getElementById("loginFields").style.display = "none";
});

document.getElementById("forgotPassword").addEventListener("click", function(event) {
    event.preventDefault();
    // Hide specific elements
    document.getElementById("loginForm").style.display = "none";
    document.querySelector('.page-title').style.display = 'none';
    document.querySelector('.search-container').style.display = 'none';
    document.getElementById("logoutButton").style.display = 'none';
    document.querySelector('.overlay').style.display = 'none'; // Hide the overlay
    // Hide all content except the background
    document.querySelector('.video-background').style.display = 'none';
    document.querySelector('.background-image').style.display = 'block';
    document.getElementById("forgotPasswordMessage").style.display = 'block';
});
