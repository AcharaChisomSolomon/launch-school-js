// function crunch(sentence) {
//   if (sentence.length === 0) return ''

//   let startId = 0
//   let currId = 0
//   let output = ''

//   while (currId < sentence.length) {
//     if (sentence[startId] != sentence[currId]) {
//       output += sentence[startId]
//       startId = currId
//     }
//     currId += 1
//   }
//   output += sentence[startId]

//   return output
// }

// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('4444abcabccba'));              // "4abcabcba"
// console.log(crunch('ggggggggggggggg'));            // "g"
// console.log(crunch('a'));                          // "a"
// console.log(crunch(''));                           // ""


let i = 1;

for (i = 0; i < 10; i += 1) {
  console.log(i);
}

console.log(i);