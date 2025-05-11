const p = console.log;

function arraySum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0)
}

function equalSumIndex(arr) {
  let index = -1

  for (let i = 0; i < arr.length; i++) {
    const leftSum = arraySum(arr.slice(0, i))
    const rightSum = arraySum(arr.slice(i + 1))
    if (leftSum === rightSum) return i
  }

  return index
}

p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
p(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);

// The following test case could return 0 or 3. Since we're
// supposed to return the smallest correct index, the correct
// return value is 0.
p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);