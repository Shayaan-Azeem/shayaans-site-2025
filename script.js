document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector('.typewriter');
    textElement.style.width = '0'; // Start with width 0
    setTimeout(() => {
        textElement.style.transition = 'none'; // Disable transition for instant reset
        textElement.style.width = '100%'; // Trigger the typing effect
        setTimeout(() => {
            textElement.style.transition = ''; // Re-enable transition
        }, 50); // Small timeout to allow transition to take effect
    }, 500); // Delay before starting the animation
}); 