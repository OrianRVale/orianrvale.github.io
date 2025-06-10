const runes = ['ᛏ', 'ᚺ', 'ᛖ', 'ᚹ', 'ᚨ', 'ᛃ'];
const phrases = [
  'The Awakening',
  'Do you feel it?',
  'The Chosen One Will Remember'
];

const runeElements = document.querySelectorAll('.rune');
let showingEnglish = false;
let phraseIndex = 0;

function rotateRunes() {
  if (!showingEnglish) {
    // Show English phrase
    const phrase = phrases[phraseIndex].toUpperCase();
    for (let i = 0; i < runeElements.length; i++) {
      runeElements[i].textContent = phrase[i] || '';
    }
    showingEnglish = true;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  } else {
    // Return to runes
    for (let i = 0; i < runeElements.length; i++) {
      runeElements[i].textContent = runes[i % runes.length];
    }
    showingEnglish = false;
  }
}

// Start rotating every 6 seconds
setInterval(rotateRunes, 6000);

// Optional: run once on page load
rotateRunes();
