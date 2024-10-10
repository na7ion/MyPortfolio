window.addEventListener('scroll', function() {
    const headerImage = document.querySelector('.header-image'); 
    const backgroundContainer = document.querySelector('.background-container');
    const backgroundHeight = backgroundContainer.offsetHeight; 

    if (window.scrollY > backgroundHeight) {
        headerImage.style.opacity = '1'; 
    } else {
        headerImage.style.opacity = '0'; 
    }
});

const headerName = document.querySelector('.header-name');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > header.offsetHeight) {
        headerName.classList.remove('hidden'); 
    } else {
        headerName.classList.add('hidden'); 
    }
});
