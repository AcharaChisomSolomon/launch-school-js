function utf16Value(str) {
  let total = 0;

  for (let i = 0; i < str.length; i++) {
    total += str.charCodeAt(i)
  }

  return total;
}

console.log(984 === utf16Value('Four score'));         // 984
console.log(1251 === utf16Value('Launch School'));      // 1251
console.log(97 === utf16Value('a'));                  // 97
console.log(0 === utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(937 === utf16Value(OMEGA));                  // 937
console.log(2811 === utf16Value(OMEGA + OMEGA + OMEGA));  // 2811