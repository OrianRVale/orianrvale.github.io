document.addEventListener("DOMContentLoaded", () => {
  const runeElements = document.querySelectorAll(".rune");

  // Define English translation for each rune
  const englishLetters = ["R", "E", "M", "E", "M", "B", "E", "R"];

  function animateRunes() {
    runeElements.forEach((rune, index) => {
      setTimeout(() => {
        // Save original rune
        const original = rune.textContent;

        // Flip to English
        rune.textContent = englishLetters[index % englishLetters.length];
        rune.classList.add("rune-glow");

        // Revert after short delay to rune
        setTimeout(() => {
          rune.textContent = original;
          rune.classList.remove("rune-glow");
        }, 2000);
      }, index * 500);
    });
  }

  // Animate on load
  animateRunes();

  // Animate every 15 seconds
  setInterval(animateRunes, 15000);

  // Optional: Hover flicker
  runeElements.forEach(rune => {
    rune.addEventListener("mouseenter", () => {
      rune.classList.add("rune-hover");
    });
    rune.addEventListener("mouseleave", () => {
      rune.classList.remove("rune-hover");
    });
  });
});
