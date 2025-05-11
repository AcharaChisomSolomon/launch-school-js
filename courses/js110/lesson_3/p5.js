const p = console.log;

function mostCommonChar(string) {
  const characterCountObj = string.split('').reduce((countObj, currentChar) => {
    countObj[currentChar.toLowerCase()] = countObj[currentChar.toLowerCase()] + 1 || 1
    return countObj
  }, {})

  let max = Math.max(...Object.values(characterCountObj))
  for (const char in characterCountObj) {
    if (characterCountObj[char] === max) {
      return char
    }
  }
}

p(mostCommonChar('Hello World') === 'l');
p(mostCommonChar('Mississippi') === 'i');
p(mostCommonChar('Happy birthday!') === 'h');
p(mostCommonChar('aaaaaAAAA') === 'a');

let myStr = 'Peter Piper picked a peck of pickled peppers.';
p(mostCommonChar(myStr) === 'p');

myStr = 'Peter Piper repicked a peck of repickled peppers. He did!';
p(mostCommonChar(myStr) === 'e');