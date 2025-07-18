window.addEventListener('load', function () {
  // 🔁 ROTATING STATIC PHRASES (above the glyphs)
  const phraseRotator = document.getElementById('phrase-rotator');

  const staticPhrases = [
    'Enter the glyphs.',
    'The Awakening.',
    'Do You Feel It?',
    'The Chosen One Will Remember.',
    'They Are Watching.',
    'The Signal Is Real.'
  ];

  let staticIndex = 0;

  function rotateStaticPhrase() {
    if (phraseRotator) {
      phraseRotator.textContent = staticPhrases[staticIndex];
      staticIndex = (staticIndex + 1) % staticPhrases.length;
    }
  }

  rotateStaticPhrase();
  setInterval(rotateStaticPhrase, 5000);

  // 🔁 ROTATING GLYPHS (do NOT form English words)
  const runeElements = document.querySelectorAll('.rune');
  const runeSet = ['ᚠ','ᚢ','ᚦ','ᚨ','ᚱ','ᛉ','ᛃ','ᛇ','ᛗ','ᛞ','ᛟ','ᛋ'];

  function shuffleRunes() {
    runeElements.forEach((el) => {
      el.classList.add('hidden');
      setTimeout(() => {
        const newRune = runeSet[Math.floor(Math.random() * runeSet.length)];
        el.textContent = newRune;
        el.classList.remove('hidden');
      }, 200);
    });
  }

  shuffleRunes();
  setInterval(shuffleRunes, 4000);

  // 🔁 RUNE FLIP FX
  runeElements.forEach((el, i) => {
    setInterval(() => {
      el.classList.toggle('flip');
    }, 3000 + Math.random() * 1500);
  });
});
