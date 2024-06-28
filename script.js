// Smooth scroll to sections
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor link behavior

        const sectionId = this.getAttribute('href').substring(1); // Get the section ID from the href attribute
        scrollToSection(sectionId);
    });
});

// Scroll to the specified section
function scrollToSection(sectionId) {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
        const headerHeight = document.querySelector('header').offsetHeight; // Get the height of the header

        // Scroll to the section with offset adjustment
        window.scroll({
            top: sectionElement.offsetTop - headerHeight, // Scroll to the top of the section minus the header height
            behavior: 'smooth'
        });
    }
}
