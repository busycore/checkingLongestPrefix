let words = ["flower", "flow", "flight"];

function checkWords(wordsArray) {
  let temp = [];
  let endOfWord = false;

  for (
    let letterIdx = 0;
    letterIdx < wordsArray[0].length && endOfWord !== true;
    letterIdx++
  ) {
    let currentLetter = wordsArray[0][letterIdx];

    for (let nextWords = 1; nextWords < wordsArray.length; nextWords++) {
      let nextWord = wordsArray[nextWords];
      let nextWordLetter = nextWord[letterIdx];
      if (currentLetter !== nextWordLetter) {
        endOfWord = true;
        break;
      } else if (nextWords === wordsArray.length - 1) {
        temp.push(currentLetter);
      }
    }
  }
  return temp.join("");
}

console.log(checkWords(words));
