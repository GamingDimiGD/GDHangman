let antiLag = false
let antiLagButton = document.getElementById('antilag');
let sadAmount = 0

antiLagButton.addEventListener('click', () => {
    if (antiLag) {
        antiLag = false
        antiLagButton.innerText = '減少效果'
        is = 50
    } else {
        antiLag = true
        antiLagButton.innerText = '增加效果'
        is = 250
    }
    if (funMode) {
        clearInterval(interval)
        interval = setInterval(fun, is)
    }
})

const party = () => {
    if (rmv === 0) return;
    let speed = 25
    let d = 215
    if (antiLag) d = 25
    const duration = d * 1000,
        animationEnd = Date.now() + duration,
        defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0 || antiLag || rmv === 0) {
            return clearInterval(interval);
        }

        const particleCount = 500 * (timeLeft / duration);
        if (antiLag) particleCount = 20 * (timeLeft / duration);

        // since particles fall down, start a bit higher than random
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            })
        );
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            })
        );
    }, speed);
}

const sad = () => {
    sadAmount++
    checkStreak(0)
    if (sadAmount > 10) new Audio('../sfx/eeeeuuugh.mp3').play()
    if(rng(2) === 1) new Audio('../sfx/wah-wah-wah-wahahaha.mp3').play()
    else new Audio('../sfx/cry.mp3').play()
    confetti({
        spread: 360,
        ticks: 200,
        gravity: 1,
        decay: 0.94,
        startVelocity: 30,
        particleCount: 100,
        scalar: 3,
        shapes: ["image"],
        shapeOptions: {
            image: [{
                src: "../images/cry.jpeg",
                width: 64,
                height: 64,
            },
            ],
        },
    });
    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
    };

    function shoot() {
      confetti({
        ...defaults,
        particleCount: 20,
        scalar: 2,
        shapes: ["emoji"],
        shapeOptions: {
          emoji: {
            value: ["😭", "😢"],
          },
        },
      });
    }

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
}