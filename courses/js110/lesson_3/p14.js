const p = console.log;

function sevenEleven(limit) {
  let total = 0

  for (let i = 7; i < limit; i += 7) {
    total += i
  }
  for (let i = 11; i < limit; i += 11) {
    total += i
  }
  for (let i = 77; i < limit; i += 77) {
    total -= i
  }

  return total
}

p(sevenEleven(10) === 7);
p(sevenEleven(11) === 7);
p(sevenEleven(12) === 18);
p(sevenEleven(25) === 75);
p(sevenEleven(100) === 1153);
p(sevenEleven(0) === 0);
p(sevenEleven(-100) === 0);