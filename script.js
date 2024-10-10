// Add this script to your existing JavaScript file or in a <script> tag in the HTML
window.addEventListener('scroll', function() {
    const headerImage = document.querySelector('.header-image'); // Select the header image
    const backgroundContainer = document.querySelector('.background-container');
    const backgroundHeight = backgroundContainer.offsetHeight; // Get height of the background

    // Check if the page has been scrolled past the background section
    if (window.scrollY > backgroundHeight) {
        headerImage.style.opacity = '1'; // Show the image in the header
    } else {
        headerImage.style.opacity = '0'; // Hide the image in the header
    }
});

// JavaScript to control the visibility of the header name
const headerName = document.querySelector('.header-name');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > header.offsetHeight) {
        headerName.classList.remove('hidden'); // Show the header name
    } else {
        headerName.classList.add('hidden'); // Hide the header name
    }
});
