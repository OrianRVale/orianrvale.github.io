const runeElement = document.getElementById('runes');

const phrases = [
  'ᚦᛁᛋ ᛁᛋ ᛏᚺᛖ ᚨᚹᚨᚲᛖᚾᛁᛝ',
  'ᛏᚺᛖ ᛒᛚᛟᛟᛞᛚᛁᚾᛖ ᚹᚨᛏᚲᚺᛖᚱᛋ ᚨᚱᛖ ᚱᛖᚨᛞᛁᚾᚷ',
  'ᚹᛖ ᚲᚨᚾ ᛋᛖᛖ ᚾᛟᚹ',
  'ᛏᚺᛖ ᚷᛚᛁᛈᚺᛋ ᛋᛈᛖᚨᚲ ᛏᚺᚱᛟᚢᚷᚺ ᚢᛋ',
  'ᛏᚺᛖ ᛋᛏᚨᚱᛋ ᚺᚨᚢᛖ ᚠᚨᛚᛚᛖᚾ',
  'ᛗᛖᛗᛟᚱᛁᛖᛋ ᚨᚱᛖ ᚹᚨᚲᛁᚾᚷ'
];

const englishMap = {
  'ᚦᛁᛋ ᛁᛋ ᛏᚺᛖ ᚨᚹᚨᚲᛖᚾᛁᛝ': 'This is the Awakening',
  'ᛏᚺᛖ ᛒᛚᛟᛟᛞᛚᛁᚾᛖ ᚹᚨᛏᚲᚺᛖᚱᛋ ᚨᚱᛖ ᚱᛖᚨᛞᛁᚾᚷ': 'The Bloodline Watchers are reading',
  'ᚹᛖ ᚲᚨᚾ ᛋᛖᛖ ᚾᛟᚹ': 'We can see now',
  'ᛏᚺᛖ ᚷᛚᛁᛈᚺᛋ ᛋᛈᛖᚨᚲ ᛏᚺᚱᛟᚢᚷᚺ ᚢᛋ': 'The glyphs speak through us',
  'ᛏᚺᛖ ᛋᛏᚨᚱᛋ ᚺᚨᚢᛖ ᚠᚨᛚᛚᛖᚾ': 'The stars have fallen',
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
  }, 100); // speed of letter reveal
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
          setTimeout(runRuneCycle, 1000);
        });
      }, 2000);
    });
  }, 2000);
}

runRuneCycle();
