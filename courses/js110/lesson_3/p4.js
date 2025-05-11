const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

function closestNumbers(arr) {
  let currentMin = Infinity
  let currentPair = []
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) < currentMin) {
        currentMin = Math.abs(arr[i] - arr[j])
        currentPair = [arr[i], arr[j]]
      }
    }
  }

  return currentPair
}

p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));
p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27]));
p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));