const passwordInput = document.getElementById('password-input');
const submitButton = document.getElementById('submit-button');
const passwordSection = document.getElementById('password-section');
const welcomeMessage = document.getElementById('welcome-message');
const errorMessage = document.getElementById('error-message');

const correctPassword = ['Keeri','keeri','KEERI'];


submitButton.addEventListener('click', () => {
    if (correctPassword.includes(passwordInput.value)) {
        passwordSection.style.display = 'none';
        welcomeMessage.textContent = "Hey! I KNOW YOU FEEL DOWN BUT DON'T WORRY YOU GOT THIS! you are doing your best, Push yourself! stay strong and keep going! I BELIEVE IN YOU! LOTS OF [INSERT FORBIDDEN WORD] YOU GOT THIS, KEEP GOIN";
        welcomeMessage.style.display = 'block';
        welcomeMessage.classList.add('animated-message');
    } else {
        errorMessage.textContent = 'Made a typo in your own nickname?';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('particles-container');

    // Create and add a set number of spots
    const numSpots = 70; // Adjust for density
    for (let i = 0; i < numSpots; i++) {
        createParticle('spot', container);
    }

    // Create and add a set number of emojis
    const numEmojis = 13; // Adjust for density
    const emojiList = ['❤️', '🌸', '💕', '🌹', '💗', '✨','🌼', '🌺', '🌷'];
    for (let i = 0; i < numEmojis; i++) {
        createParticle('emoji', container, emojiList[Math.floor(Math.random() * emojiList.length)]);
    }
});

function createParticle(type, container, content = '') {
    const particle = document.createElement('span');
    particle.className = type;
    particle.textContent = content;

    if (type === 'emoji') {
        const randomX = Math.random() * 100;
        particle.style.left = `${randomX}%`;
        particle.style.bottom = '0';

        const randomDuration = 5 + Math.random() * 5;
        particle.style.animationDuration = `${randomDuration}s`;

        const randomDelay = Math.random() * 3;
        particle.style.animationDelay = `${randomDelay}s`;

        particle.style.animationIterationCount = 1;

        // Re-create emoji after animation ends for continuous random order
        particle.addEventListener('animationend', () => {
            container.removeChild(particle);
            const emojiList = ['❤️', '🌸', '💕', '🌹', '💗', '✨','🌼', '🌺', '🌷'];
            const randomEmoji = emojiList[Math.floor(Math.random() * emojiList.length)];
            createParticle('emoji', container, randomEmoji);
        });
    } else {
        const randomX = Math.random() * 100;
        particle.style.left = `${randomX}%`;
        const randomY = Math.random() * 80 + 10;
        particle.style.top = `${randomY}vh`;
        const randomDelay = Math.random() * 2; // 0-2s, shorter for less gap
        particle.style.animationDelay = `${randomDelay}s`;
        const randomDuration = 4 + Math.random() * 3; // 4-7s, shorter for less gap
        particle.style.animationDuration = `${randomDuration}s`;
        particle.style.animationIterationCount = 1;
        particle.addEventListener('animationend', () => {
            container.removeChild(particle);
            createParticle('spot', container);
        });
    }

    container.appendChild(particle);
}
