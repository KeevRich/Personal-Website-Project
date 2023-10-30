// navigation buttons
const homeButton = document.getElementById('home-button');
const aboutButton = document.getElementById('about-button');
const portfolioButton = document.getElementById('portfolio-button');

// content sections
const homeSection = document.getElementById('home-section');
const aboutSection = document.getElementById('about-section');
const portfolioSection = document.getElementById('portfolio-section');

// Hide all sections except the home section initially
aboutSection.style.display = 'none';
portfolioSection.style.display = 'none';

// Add event listeners to the buttons
homeButton.addEventListener('click', () => {
    homeSection.style.display = 'block';
    aboutSection.style.display = 'none';
    portfolioSection.style.display = 'none';
});

aboutButton.addEventListener('click', () => {
    homeSection.style.display = 'none';
    aboutSection.style.display = 'block';
    portfolioSection.style.display = 'none';
});

portfolioButton.addEventListener('click', () => {
    homeSection.style.display = 'none';
    aboutSection.style.display = 'none';
    portfolioSection.style.display = 'block';
});
