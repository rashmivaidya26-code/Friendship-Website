
// Surprise message
const surpriseBtn = document.getElementById("surpriseBtn");
const modal = document.getElementById("surpriseModal");
const closeBtn = document.getElementById("closeBtn");

surpriseBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
});

// Friendship quotes
const quotes = [
  "A true friend makes every moment beautiful. 💗",
  "Good friends are like stars. You don't always see them, but they are always there. ✨",
  "Life is better with a bestie by your side. 🦋",
  "Friends make ordinary moments unforgettable. 🌸",
  "Side by side or miles apart, best friends stay close at heart. 💕"
];

let quoteIndex = 0;

document.getElementById("quoteBtn").addEventListener("click", () => {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  document.getElementById("quoteText").textContent = quotes[quoteIndex];
});

// Background music
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicBtn.textContent = "❚❚ Pause Music 🎵";
    } catch (error) {
      alert("Music could not play. Please check your MP3 file.");
    }
  } else {
    music.pause();
    musicBtn.textContent = "▶ Play Music 🎵";
  }
});

// Floating hearts
const heartsContainer = document.getElementById("hearts");

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = ["💗", "💕", "💖", "✨", "🌸"][
    Math.floor(Math.random() * 5)
  ];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (15 + Math.random() * 20) + "px";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 650);
