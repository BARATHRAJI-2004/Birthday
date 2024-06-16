function generateFireworks() {
    const fireworksContainer = document.querySelector('.fireworks');
    const colors = ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f'];

    setInterval(() => {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        firework.style.left = Math.random() * 100 + '%';
        firework.style.animationDuration = Math.random() * 2 + 1 + 's';
        fireworksContainer.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 2000);
    }, 800);
}


window.onload = function() {
    generateFireworks();
};