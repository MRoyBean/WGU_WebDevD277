/* Author: Michael Bean
    Date:6/3/2024
    Class: D277
    Project: Task 2
    Script JS Page */

// Function to validate if the email and confirm email fields match
function validateEmail() {
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirm-email').value;
    if (email !== confirmEmail) {
        alert('Emails do not match. Please try again.');
        return false;
    }
    return true;
}

// Function to create a rain effect on the page
function createRain() {
    const rainContainer = document.getElementById('rain-container');

    // Create 100 raindrops with random positions and animations
    for (let i = 0; i < 100; i++) {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');
        raindrop.style.left = `${Math.random() * 100}vw`;
        raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`;
        raindrop.style.animationDelay = `${Math.random() * 2}s`;
        rainContainer.appendChild(raindrop);
    }
}

// Add event listener to validate the email form on submit and create rain on page load
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.onsubmit = validateEmail;
    }
    createRain();
});
