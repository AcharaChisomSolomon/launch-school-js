const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

function repeatedSubstring(string) {
  for (let i = 1; i <= string.length; i++) {
    let currSubString = string.slice(0, i)
    if (currSubString.repeat(Math.floor(string.length / currSubString.length)) === string) {
      return [currSubString, Math.floor(string.length / currSubString.length)]
    }
  }
}

p(eq(repeatedSubstring('xyzxyzxyz'), ['xyz', 3]));
p(eq(repeatedSubstring('xyxy'), ['xy', 2]));
p(eq(repeatedSubstring('xyz'), ['xyz', 1]));
p(eq(repeatedSubstring('aaaaaaaa'), ['a', 8]));
p(eq(repeatedSubstring('superduper'), ['superduper', 1]));