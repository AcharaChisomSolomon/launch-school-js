function range(start, end = -1) {
  if (end === -1) {
    [start, end] = [0, start]
  }
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// function range(end) {
//   return range(0, end);
// }

// Examples

console.log(range(10, 20));
console.log(range(5));