document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('openCard').addEventListener('click', function () {
        const card = document.getElementById('card');
        const cardBack = document.querySelector('.card-back');

        card.classList.add('flipped');

        setTimeout(() => {
            cardBack.classList.remove('hidden');
            startConfetti();
            startHearts();
        }, 800);
    });

    function startConfetti() {
        const confettiContainer = document.createElement('div');
        confettiContainer.classList.add('confetti-container');
        document.body.appendChild(confettiContainer);

        function generateConfetti() {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
            confetti.style.animationDelay = `${Math.random()}s`;
            confettiContainer.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }

        setInterval(generateConfetti, 100);
    }

    function startHearts() {
        const heartsContainer = document.createElement('div');
        heartsContainer.classList.add('hearts-container');
        document.body.appendChild(heartsContainer);

        function generateHeart() {
            const heart = document.createElement('span');
            heart.innerHTML = "<3";
            heart.classList.add('heart');
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.top = `${Math.random() * 100}vh`;
            heart.style.animationDelay = `${Math.random() * 3}s`;

            heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 6000);
        }

        setInterval(generateHeart, 500);
    }
});