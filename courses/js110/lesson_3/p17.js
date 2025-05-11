const p = console.log;

function isPrime(num) {
  if (num < 2) return false
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return true
}

function getClosestPrimeTo(num) {
  let id = num + 1
  while (true) {
    if (isPrime(id)) {
      return id
    }
    id += 1
  }
}

function nearestPrimeSum(array) {
  const total = array.reduce((acc, curr) => acc + curr)
  return getClosestPrimeTo(total) - total
}

p(nearestPrimeSum([1, 2, 3]) === 1);        // Nearest prime to 6 is 7
p(nearestPrimeSum([5, 2]) === 4);           // Nearest prime to 7 is 11
p(nearestPrimeSum([1, 1, 1]) === 2);        // Nearest prime to 3 is 5
p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37

// Nearest prime to 163 is 167
p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);