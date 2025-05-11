const p = console.log;

function minimumSum(arr) {
  if (arr.length < 5) return null

  return arr.slice(0, arr.length - 5 + 1).reduce((currentMin, value, index) => {
    const total = arr.slice(index, index + 5).reduce((total, currVal) => {
      return total + currVal
    }, 0)
    return total < currentMin ? total : currentMin
  }, Infinity)
}

p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);