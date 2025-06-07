const runePhrases = [
  "ᚦᚺᛖ ᚲᚺᛟᛊᛖᚾ ᛟᚾᛖ ᚹᛁᛚᛚ ᚱᛖᛗᛖᛗᛒᛖᚱ",
  "ᚨᚾᛞ ᛊᛟ ᛞᛟ ᚹᛖ",
  "ᛏᚺᛖ ᚨᚹᚨᚲᛖᚾᛁᚾᚷ ᛁᛋ ᚾᛖᚨᚱ"
];

const englishPhrases = [
  "The Chosen One Will Remember",
  "And So Do We",
  "The Awakening Is Near"
];

const runeContainer = document.getElementById("runeContainer");

let phraseIndex = 0;
let letterIndex = 0;
let isRune = true;

function animatePhrase() {
  const current = isRune ? runePhrases[phraseIndex] : englishPhrases[phraseIndex];
  runeContainer.textContent = current.slice(0, letterIndex);

  if (letterIndex < current.length) {
    letterIndex++;
    setTimeout(animatePhrase, 80);
  } else {
    setTimeout(() => {
      isRune = !isRune;
      letterIndex = 0;
      if (!isRune) phraseIndex = (phraseIndex + 1) % runePhrases.length;
      animatePhrase();
    }, 2500);
  }
}

animatePhrase();
