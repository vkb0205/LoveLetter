// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const instructions = document.getElementById('instructions');
    
    // Open envelope on click
    envelope.addEventListener('click', function() {
        if (!envelope.classList.contains('opened')) {
            envelope.classList.add('opened');
            instructions.classList.add('hidden');
            
            // Add confetti effect
            createConfetti();
        }
    });
    
    // Create floating confetti hearts
    function createConfetti() {
        const confettiCount = 50;
        const colors = ['❤️', '💕', '💖', '💝', '💗', '💓'];
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.textContent = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}%;
                top: -50px;
                font-size: ${Math.random() * 20 + 20}px;
                animation: fall ${Math.random() * 3 + 2}s linear forwards;
                z-index: 9999;
                pointer-events: none;
            `;
            
            document.body.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }
    
    // Add CSS animation for confetti
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
