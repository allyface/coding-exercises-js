export default function scrabBag(lettersUsed) {

  let letters = lettersUsed.split('')

  let letterCounts = {
    'A': 9,
    'B': 2,
    'C': 2,
    'D': 4,
    'E': 12,
    'F': 2,
    'G': 3,
    'H': 2,
    'I': 9,
    'J': 1,
    'K': 1,
    'L': 4,
    'M': 2,
    'N': 6,
    'O': 8,
    'P': 2,
    'Q': 1,
    'R': 6,
    'S': 4,
    'T': 6,
    'U': 4,
    'V': 2,
    'W': 2,
    'X': 1,
    'Y': 2,
    'Z': 1,
    '_': 2
  }

  letters.forEach(function(letter) {
    letterCounts[letter]--
  })

  // for (letterIndex = 0; letterIndex < letters.length; letterIndex++) {
  //   let letter = letters[letterIndex]
  //   letterCounts[letter]--
  // }

  let formattedLetterCounts = {}

  for (var letterKey in letterCounts) {
    let count = letterCounts[letterKey]
    if (!(count in formattedLetterCounts)) {
      formattedLetterCounts[count] = []
    }
      formattedLetterCounts[count].push(letterKey)
  }

  return formattedLetterCounts

}
