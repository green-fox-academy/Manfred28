function splitToTwoChars(string) {
  let arrayOfStrings = [];
  for (let i=1; i < string.length; i+= 2) {
    arrayOfStrings.push(string[i-1] + string[i])
  }
  return arrayOfStrings
}

console.log(splitToTwoChars("abcdef"))
