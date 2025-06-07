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
let showingRunes = true;

function getRandomRune() {
  const runes = "ᚠᚡᚢᚣᚤᚥᚦᚧᚨᚩᚪᚫᚬᚭᚮᚯᚰᚱᚲᚳᚴᚵᚶᚷᚸᚹᚺᚻᚼᚽᚾᚿ";
  return runes[Math.floor(Math.random() * runes.length)];
}

function flipCharacters(from, to, callback) {
  let frame = 0;
  const maxFrames = 12;
  const interval = setInterval(() => {
    let output = '';
    for (let i = 0; i < to.length; i++) {
      if (frame < maxFrames - 1) {
        output += getRandomRune();
      } else {
        output += to[i];
      }
    }
    runeContainer.textContent = output;
    frame++;
    if (frame >= maxFrames) {
      clearInterval(interval);
      callback();
    }
  }, 60);
}

function nextCycle() {
  const from = showingRunes ? runePhrases[phraseIndex] : englishPhrases[phraseIndex];
  const to = showingRunes ? englishPhrases[phraseIndex] : runePhrases[(phraseIndex + 1) % runePhrases.length];

  flipCharacters(from, to, () => {
    showingRunes = !showingRunes;
    if (!showingRunes) phraseIndex = (phraseIndex + 1) % runePhrases.length;
    setTimeout(nextCycle, 3000);
  });
}

runeContainer.textContent = runePhrases[0];
setTimeout(nextCycle, 3000);
