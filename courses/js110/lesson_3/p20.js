const p = console.log;

function whatIsDifferent(array) {
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      if (array[i] !== array[i + 1] && array[i + 1] === array[i + 2]) {
        return array[i]
      }
      continue
    }
    if (i === array.length - 1) {
      if (array[i] !== array[i - 1] && array[i - 1] === array[i - 2]) {
        return array[i]
      }
      continue
    }
    if (array[i - 1] !== array[i] && array[i] !== array[i + 1]) {
      return array[i]
    }
  }
}

p(whatIsDifferent([0, 1, 0]) === 1);
p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
p(whatIsDifferent([3, 4, 4, 4]) === 3);
p(whatIsDifferent([4, 4, 4, 3]) === 3);