const p = console.log;

function distinctMultiples(string) {
  const obj = string.split('').reduce((obj, char) => {
    obj[char.toLowerCase()] = obj[char.toLowerCase()] + 1 || 1
    return obj
  }, {})
  return Object.values(obj).reduce((count, num) => num > 1 ? count + 1 : count, 0)
}

p(distinctMultiples('xyz') === 0);              // (none)
p(distinctMultiples('xxyypzzr') === 3);         // x, y, z
p(distinctMultiples('xXyYpzZr') === 3);         // x, y, z
p(distinctMultiples('unununium') === 2);        // u, n
p(distinctMultiples('multiplicity') === 3);     // l, t, i
p(distinctMultiples('7657') === 1);             // 7
p(distinctMultiples('3141592653589793') === 4); // 3, 1, 5, 9
p(distinctMultiples('2718281828459045') === 5); // 2, 1, 8, 4, 5