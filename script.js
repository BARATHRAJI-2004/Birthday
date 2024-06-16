document.addEventListener("DOMContentLoaded", function() {
    function createFirework(x, y) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = `${x}px`;
        firework.style.top = `${y}px`;
        document.querySelector('.fireworks').appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 1500);
    }

    document.addEventListener('click', (e) => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                createFirework(e.pageX + (Math.random() - 0.5) * 200, e.pageY + (Math.random() - 0.5) * 200);
            }, i * 200);
        }
    });

   
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createFirework(window.innerWidth * Math.random(), window.innerHeight * Math.random());
        }, i * 300);
    }
});
