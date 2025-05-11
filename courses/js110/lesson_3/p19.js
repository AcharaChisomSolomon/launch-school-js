const p = console.log;

function oddFellow(arr) {
  const obj = arr.reduce((obj, num) => {
    obj[num] = obj[num] + 1 || 1
    return obj
  }, {})
  return Number(Object.keys(obj).reduce((oddVal, num) => {
    return ((obj[num]) % 2 === 1) ? num : oddVal
  }, 0))
}

p(oddFellow([4]) === 4);
p(oddFellow([7, 99, 7, 51, 99]) === 51);
p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
p(oddFellow([0, 0, 0]) === 0);