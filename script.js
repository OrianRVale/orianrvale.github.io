// Flip runes periodically
const runes = document.querySelectorAll('.rune');
setInterval(() => {
  runes.forEach((rune, index) => {
    setTimeout(() => {
      rune.classList.add('flip');
      setTimeout(() => rune.classList.remove('flip'), 1500);
    }, index * 200);
  });
}, 5000);

// Countdown to release date
const countdownElement = document.getElementById('countdown');
const releaseDate = new Date('August 13, 2025 20:13:00 CDT').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = releaseDate - now;

  if (distance < 0) {
    countdownElement.innerText = 'The awakening has begun...';
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdownElement.innerText = `Next Update In: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
