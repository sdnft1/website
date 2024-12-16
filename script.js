document.addEventListener('DOMContentLoaded', () => {
    // Minting functionality
    const mintButton = document.querySelector('.mint-button');
    mintButton.addEventListener('click', () => {
        // Add minting logic here
        alert('Minting feature coming soon!');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});