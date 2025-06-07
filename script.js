const runesElement = document.getElementById('runes');
const runePhrases = [
  'ᚦᛁᛋ ᛁᛋ ᛏᚺᛖ ᚨᚹᚨᚲᛖᚾᛁᛝ',
  'ᛏᚺᛖ ᛋᚺᚨᛞᛟᚹᛋ ᚹᛁᛚᛚ ᚠᚨᛚᛚ',
  'ᛏᚺᛖ ᚲᚺᛟᛋᛖᚾ ᛟᚾᛖ ᚹᛁᛚᛚ ᚱᛖᛗᛖᛗᛒᛖᚱ',
  'ᛟᚾᛚᛁ ᚾᛖᛋᛏᛖᛞ ᚲᚺᛁᛚᛞᚱᛖᚾ ᛋᛖᛖ',
  'ᚠᚨᛏᛖ ᚹᛁᛚᛚ ᚷᚢᛁᛞᛖ ᛏᚺᛖᛗ ᚺᛟᛗᛖ',
  'ᚹᛖ ᚱᛖᛗᛖᛗᛒᛖᚱ ᚹᚺᛟ ᚹᛖ ᚨᚱᛖ'
];

let index = 0;

function rotateRunes() {
  runesElement.textContent = runePhrases[index];
  index = (index + 1) % runePhrases.length;
}

setInterval(rotateRunes, 3000);
