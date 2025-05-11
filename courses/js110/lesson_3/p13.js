const p = console.log;

function unscramble(str1, str2) {
  const charObj = str1.split('').reduce((obj, _, index) => {
    const str1Char = str1[index]
    const str2Char = str2[index]

    if (obj.hasOwnProperty(str1Char)) {
      obj[str1Char] = obj[str1Char] + 1
    } else {
      obj[str1Char] = 1
    }
    
    if (obj.hasOwnProperty(str2Char)) {
      obj[str2Char] = obj[str2Char] - 1
    } else {
      obj[str2Char] = -1
    }

    return obj
  }, {})
  
  return str2.split('').every(c => charObj[c] >= 0)
}

p(unscramble('ansucchlohlo', 'launchschool') === true);
p(unscramble('phyarunstole', 'pythonrules') === true);
p(unscramble('phyarunstola', 'pythonrules') === false);
p(unscramble('boldface', 'coal') === true);