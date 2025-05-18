const p = console.log

function sum(num) {
  if (num < 10) return num
  return (num % 10) + sum(Math.floor(num / 10))
}

p(sum(23) === 5);           // 5
p(sum(496) === 19);          // 19
p(sum(123456789) === 45);    // 45