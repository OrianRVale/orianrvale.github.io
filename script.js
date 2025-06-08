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
      }, index * 350);
    });
  }

  flipRunes();
  setInterval(flipRunes, 15000);
});
