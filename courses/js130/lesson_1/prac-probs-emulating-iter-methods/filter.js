function filter(array, callback) {
  const filteredOutput = []

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      filteredOutput.push(array[i])
    }
  }

  return filteredOutput
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]