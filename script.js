const runeElement = document.getElementById('runes');

const phrases = [
  'ᚦᛁᛋ ᛁᛋ ᛏᚺᛖ ᚨᚹᚨᚲᛖᚾᛁᛝ',
  'ᛏᚺᛖ ᛋᚺᚨᛞᛟᚹᛋ ᚹᛁᛚᛚ ᚠᚨᛚᛚ',
  'ᛏᚺᛖ ᚲᚺᛟᛋᛖᚾ ᛟᚾᛖ ᚹᛁᛚᛚ ᚱᛖᛗᛖᛗᛒᛖᚱ',
  'ᛗᛖᛗᛟᚱᛁᛖᛋ ᚨᚱᛖ ᚹᚨᚲᛁᚾᚷ'
];

const englishMap = {
  'ᚦᛁᛋ ᛁᛋ ᛏᚺᛖ ᚨᚹᚨᚲᛖᚾᛁᛝ': 'This is the Awakening',
  'ᛏᚺᛖ ᛋᚺᚨᛞᛟᚹᛋ ᚹᛁᛚᛚ ᚠᚨᛚᛚ': 'The shadows will fall',
  'ᛏᚺᛖ ᚲᚺᛟᛋᛖᚾ ᛟᚾᛖ ᚹᛁᛚᛚ ᚱᛖᛗᛖᛗᛒᛖᚱ': 'The Chosen One will remember',
  'ᛗᛖᛗᛟᚱᛁᛖᛋ ᚨᚱᛖ ᚹᚨᚲᛁᚾᚷ': 'Memories are waking'
};

let index = 0;

function flipOneByOne(original, translated, callback) {
  let i = 0;
  const chars = original.split('');
  const interval = setInterval(() => {
    if (i < translated.length) {
      chars[i] = translated[i];
      runeElement.textContent = chars.join('');
      i++;
    } else {
      clearInterval(interval);
      callback();
    }
  }, 100);
}

function runRuneCycle() {
  const rune = phrases[index];
  const translation = englishMap[rune];
  runeElement.textContent = rune;

  setTimeout(() => {
    flipOneByOne(rune, translation, () => {
      setTimeout(() => {
        flipOneByOne(translation, rune, () => {
          index = (index + 1) % phrases.length;
          setTimeout(runRuneCycle, 1500);
        });
      }, 2500);
    });
  }, 2000);
}

runRuneCycle();
