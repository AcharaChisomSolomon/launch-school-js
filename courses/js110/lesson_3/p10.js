const p = console.log;

function evenSubstrings(string) {
  let total = 0
  let id = 0

  while (id < string.length) {
    if (Number(string[id]) % 2 === 0) {
      total += id + 1
    }
    id += 1
  }

  return total
}

p(evenSubstrings('1432') === 6);
p(evenSubstrings('3145926') === 16);
p(evenSubstrings('2718281') === 16);
p(evenSubstrings('13579') === 0);
p(evenSubstrings('143232') === 12);