function multisum(limit) {
  let total = 0
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      total += i
    } else if (i % 3 === 0) {
      total += i
    } else if (i % 5 === 0) {
      total += i
    }
  }
  return total
}

console.log(3 === multisum(3));       // 3
console.log(8 === multisum(5));       // 8
console.log(33 === multisum(10));      // 33
console.log(234168 === multisum(1000));    // 234168