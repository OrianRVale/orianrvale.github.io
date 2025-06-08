// Flip each rune to English, staggered one-by-one
const englishWords = ['The', 'veil', 'is', 'thin', 'Do', 'you', 'feel', 'it?', 'We', 'remember'];
const runeElements = document.querySelectorAll('.rune');

runeElements.forEach((rune, index) => {
  setTimeout(() => {
    rune.style.transform = 'rotateY(180deg)';
    setTimeout(() => {
      rune.textContent = englishWords[index];
      rune.style.color = '#00ffff';
    }, 800);
  }, index * 500);
});

// Countdown to 10 days from now
const countdown = document.getElementById('countdown');
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 10);

function updateCountdown() {
  const now = new Date();
  const distance = targetDate - now;

  if (distance <= 0) {
    countdown.innerText = "The next glyph has been revealed.";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdown.innerText = `Next Update In: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
