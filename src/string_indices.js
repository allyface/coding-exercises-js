export default function stringIndices (fullString, index) {

  let splitString = fullString.replace(/[^\w\s]|_/g, "")
                         .replace(/\s+/g, " ")
                         .split(" ")

  let wordAtIndex = splitString[(index - 1)]

  if (wordAtIndex === undefined) {
    return ''
  } else {
    return wordAtIndex
  }
}
