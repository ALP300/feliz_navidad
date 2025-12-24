document.addEventListener('DOMContentLoaded', () => {
    createSnow();

    const card = document.querySelector('.card');
    card.addEventListener('click', toggleCard);
});

let musicStarted = false;

function toggleCard() {
    const card = document.querySelector('.card');
    card.classList.toggle('open');

    const music = document.getElementById('bg-music');
    if (music && !musicStarted) {
        music.volume = 0.5; // Set volume to 50%
        music.play().catch(e => console.log("Audio play failed (user interaction needed):", e));
        musicStarted = true;
    }
}

function createSnow() {
    const snowContainer = document.getElementById('snow-container');
    const snowflakeCount = 40; // Fewer flakes for a simpler, clearer look

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerHTML = '❄';

        const startLeft = Math.random() * 100;
        const animationDuration = Math.random() * 5 + 5; // Slower fall (5-10s)
        const animationDelay = Math.random() * 5;
        const fontSize = Math.random() * 10 + 10;
        const opacity = Math.random() * 0.5 + 0.3;

        snowflake.style.left = `${startLeft}%`;
        snowflake.style.animation = `snowFall ${animationDuration}s linear ${animationDelay}s infinite`;
        snowflake.style.fontSize = `${fontSize}px`;
        snowflake.style.opacity = opacity;

        snowContainer.appendChild(snowflake);
    }

    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        @keyframes snowFall {
            0% {
                top: -10%;
                transform: translateX(0);
            }
            100% {
                top: 110%;
                transform: translateX(${Math.random() * 20 - 10}px);
            }
        }
    `;
    document.head.appendChild(styleSheet);
}
