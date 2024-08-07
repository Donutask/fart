const sounds = [
    new Audio("Sounds/fart1.wav"),
    new Audio("Sounds/fart2.wav"),
    new Audio("Sounds/fart3.mp3"),
    new Audio("Sounds/fart4.wav"),
    // new Audio("fart6.wav"),
]

function Fart() {
    let s = sounds[Math.floor(Math.random() * sounds.length)];

    s.play();
}