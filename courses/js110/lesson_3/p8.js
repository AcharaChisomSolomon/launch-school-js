const p = console.log;

function longestVowelSubstring(string) {
  const vowels = 'aeiou'
  let currentMaxCount = 0
  let currentCount = 0

  for (let i = 0; i < string.length; i++) {
    if (!vowels.includes(string[i])) {
      currentMaxCount = Math.max(currentMaxCount, currentCount)
      currentCount = 0
    } else {
      currentCount += 1
    }
  }

  return Math.max(currentMaxCount, currentCount)
}

p(longestVowelSubstring('cwm') === 0);
p(longestVowelSubstring('many') === 1);
p(longestVowelSubstring('launchschoolstudents') === 2);
p(longestVowelSubstring('eau') === 3);
p(longestVowelSubstring('beauteous') === 3);
p(longestVowelSubstring('sequoia') === 4);
p(longestVowelSubstring('miaoued') === 5);