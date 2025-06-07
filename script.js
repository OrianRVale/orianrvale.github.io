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
let isRune = true;

function getRandomGlyph() {
  const glyphs = "ᚠᚡᚢᚣᚤᚥᚦᚧᚨᚩᚪᚫᚬᚭᚮᚯᚰᚱᚲᚳᚴᚵᚶᚷᚸᚹᚺᚻᚼᚽᚾᚿ";
  return glyphs[Math.floor(Math.random() * glyphs.length)];
}

function animateFlip(fromText, toText, callback) {
  const length = Math.max(fromText.length, toText.length);
  const frameCount = 20;
  let frame = 0;

  const interval = setInterval(() => {
    let display = "";
    for (let i = 0; i < length; i++) {
      if (frame < frameCount - 1) {
        display += getRandomGlyph();
      } else {
        display += toText[i] || " ";
      }
    }
    runeContainer.textContent = display;
    frame++;
    if (frame >= frameCount) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 50);
}

function cyclePhrases() {
  const current = isRune ? runePhrases[phraseIndex] : englishPhrases[phraseIndex];
  const next = isRune ? englishPhrases[phraseIndex] : runePhrases[(phraseIndex + 1) % runePhrases.length];

  animateFlip(current, next, () => {
    isRune = !isRune;
    if (isRune) phraseIndex = (phraseIndex + 1) % runePhrases.length;
    setTimeout(cyclePhrases, 2500);
  });
}

// Start cycle
runeContainer.textContent = runePhrases[0];
setTimeout(cyclePhrases, 2500);
