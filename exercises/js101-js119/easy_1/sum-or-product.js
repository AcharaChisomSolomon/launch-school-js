const readlineSync = require('readline-sync');

const limit = parseInt(
  readlineSync.question("Please enter an integer greater than 0: ")
);
const operation = readlineSync.question(
  "Enter \"s\" to compute the sum, or \"p\" to compute the product. "
);
console.log();

if (operation === "s") {
  let total = 0;
  for (let i = 1; i <= limit; i++) {
    total += i;
  }
  console.log(`The sum of the integers between 1 and ${limit} is ${total}.`);
} else if (operation === "p") {
  let product = 1;
  for (let i = 1; i <= limit; i++) {
    product *= i;
  }
  console.log(`The product of the integers between 1 and ${limit} is ${product}.`);
} else {
  console.log("Ooops. Unknown operation.");
}