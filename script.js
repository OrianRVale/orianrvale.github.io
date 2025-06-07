const runeMap = {
  'ᚠ': 'T',
  'ᚢ': 'H',
  'ᚦ': 'E',
  'ᚨ': ' ',
  'ᚱ': 'C',
  'ᚲ': 'H',
  'ᛊ': 'O',
  'ᛏ': 'S',
  'ᛒ': 'E',
  'ᛚ': 'N',
  'ᚺ': ' '
};

function decodeRunes(runes) {
  return runes.split('').map(char => runeMap[char] || char).join('');
}

const runeElement = document.getElementById('runePhrase');
let showingRunes = true;

setInterval(() => {
  runeElement.textContent = showingRunes
    ? decodeRunes(runeElement.textContent)
    : 'ᚠᚢᚦᚨᚱᚲ ᛊᛏᚨᚦᚱ ᛒᛚᚨᚺ';
  showingRunes = !showingRunes;
}, 4000);
