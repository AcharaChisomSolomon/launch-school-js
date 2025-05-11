const p = console.log;

function pairs(arr) {
  if (arr.length < 2) return 0

  const numCountObj = arr.reduce((obj, num) => {
    obj[num] = obj[num] + 1 || 1
    return obj
  }, {})

  return Object.values(numCountObj).reduce((total, currCount) => total + Math.floor(currCount / 2), 0)
}

p(pairs([3, 1, 4, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7]) === 3);
p(pairs([2, 7, 1, 8, 2, 8, 1, 8, 2, 8, 4]) === 4);
p(pairs([]) === 0);
p(pairs([23]) === 0);
p(pairs([997, 997]) === 1);
p(pairs([32, 32, 32]) === 1);
p(pairs([7, 7, 7, 7, 7, 7, 7]) === 3);