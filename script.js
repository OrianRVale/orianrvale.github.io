document.addEventListener("DOMContentLoaded", () => {
  const runes = document.querySelectorAll(".rune");

  function flipRunes() {
    runes.forEach((rune, index) => {
      setTimeout(() => {
        const original = rune.textContent;
        const english = rune.getAttribute("data-english");

        rune.textContent = english;
        rune.classList.add("flipped");

        setTimeout(() => {
          rune.textContent = original;
          rune.classList.remove("flipped");
        }, 2000);
      }, index * 300);
    });
  }

  flipRunes();
  setInterval(flipRunes, 15000);

  // Countdown to August 13, 2025 8:13 PM
  const countdown = document.getElementById("countdown");
  const targetDate = new Date("August 13, 2025 20:13:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      countdown.innerHTML = "The veil has opened.";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `Next Update In: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
});
