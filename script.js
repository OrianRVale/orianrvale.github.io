// ===============
// RUNES + PHRASES
// ===============

const runes = ['ᛏ', 'ᚺ', 'ᛖ', 'ᚹ', 'ᚨ', 'ᛃ'];
const phrases = [
  'The Awakening',
  'Do You Feel It?',
  'The Chosen One Will Remember',
  'The Veil Is Thinning',
  'Sunday Is Coming',
  'The 144,000 Return'
];

const runeElements = document.querySelectorAll('.rune');
let showingEnglish = false;
let phraseIndex = 0;

function rotateRunes() {
  // Fade out
  runeElements.forEach(el => el.classList.add('hidden'));

  setTimeout(() => {
    if (!showingEnglish) {
      const phrase = phrases[phraseIndex].toUpperCase();
      for (let i = 0; i < runeElements.length; i++) {
        runeElements[i].textContent = phrase[i] || '';
      }
      showingEnglish = true;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    } else {
      for (let i = 0; i < runeElements.length; i++) {
        runeElements[i].textContent = runes[i % runes.length];
      }
      showingEnglish = false;
    }

    // Fade in
    runeElements.forEach(el => el.classList.remove('hidden'));
  }, 300);
}

// Run once at load
rotateRunes();
// Rotate every 6 seconds
setInterval(rotateRunes, 6000);

// ===============
// GLYPH FLIP FX
// ===============

runes.forEach((r, i) => {
  setInterval(() => {
    const el = runeElements[i % runeElements.length];
    if (el) el.classList.toggle('flip');
  }, 3000 + Math.random() * 1500);
});
