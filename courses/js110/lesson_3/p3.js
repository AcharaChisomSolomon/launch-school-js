const p = console.log

function toWeirdCase(string) {
  const words = string.split(" ")
  return words.map((word, index) => {
    if (((index + 1) % 3) !== 0) return word
    if (word.length < 1) return word
    return word.split('').map((char, id) => {
      if ((id + 1) % 2 !== 0) return char
      return char.toUpperCase()
    }).join('')
  }).join(" ")
}

let original = 'Lorem Ipsum is simply dummy text of the printing world';
let expected = 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG world';
p(toWeirdCase(original) === expected);

original = 'It is a long established fact that a reader will be distracted';
expected = 'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD';
p(toWeirdCase(original) === expected);

p(toWeirdCase('aaA bB c') === 'aaA bB c');

original = "Mary Poppins' favorite word is " +
           "supercalifragilisticexpialidocious";
expected = "Mary Poppins' fAvOrItE word is " +
           "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS"
p(toWeirdCase(original) === expected);