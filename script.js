document.addEventListener('DOMContentLoaded', () => {
    console.log("Snakebite Edizioni caricato con successo via HTTPS.");

    // Gestione Menu Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            const isVisible = navLinks.style.display === 'flex';
            navLinks.style.display = isVisible ? 'none' : 'flex';
        });
    }

    // Effetto Fade-in sugli articoli
    const article = document.querySelector('.post');
    if (article) {
        article.style.opacity = 0;
        article.style.transition = "opacity 1s ease-in-out";
        setTimeout(() => {
            article.style.opacity = 1;
        }, 100);
    }
});
