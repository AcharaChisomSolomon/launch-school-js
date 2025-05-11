const p = console.log;

function countSubstrings(string, subString) {
  let count = 0

  let id = 0
  while (id < string.length - subString.length + 1) {
    if (string.slice(id, id + subString.length) === subString) {
      count += 1
      id += subString.length
      continue
    }
    id += 1
  }

  return count
}

p(countSubstrings('babab', 'bab') === 1);
p(countSubstrings('babab', 'ba') === 2);
p(countSubstrings('babab', 'b') === 3);
p(countSubstrings('babab', 'x') === 0);
p(countSubstrings('babab', 'x') === 0);
p(countSubstrings('', 'x') === 0);
p(countSubstrings('bbbaabbbbaab', 'baab') === 2);
p(countSubstrings('bbbaabbbbaab', 'bbaab') === 2);
p(countSubstrings('bbbaabbbbaabb', 'bbbaabb') === 1);