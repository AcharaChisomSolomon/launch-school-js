const p = console.log;

function isPangram(string) {
  const letters = 'abcdefghijklmnopqrstuvwxyz'
  const stringCharObj = string.split('').reduce((obj, char) => {
    if (letters.includes(char.toLowerCase())) {
      obj[char.toLowerCase()] = obj[char.toLowerCase()] + 1 || 1
    }
    return obj
  }, {})
  return letters.length === Object.keys(stringCharObj).length
}

p(isPangram('The quick, brown fox jumps over the lazy dog!') === true);
p(isPangram('The slow, brown fox jumps over the lazy dog!') === false);
p(isPangram("A wizard's job is to vex chumps quickly in fog.") === true);
p(isPangram("A wizard's task is to vex chumps quickly in fog.") === false);
p(isPangram("A wizard's job is to vex chumps quickly in golf.") === true);

let myStr = 'Sixty zippers were quickly picked from the woven jute bag.';
p(isPangram(myStr) === true);