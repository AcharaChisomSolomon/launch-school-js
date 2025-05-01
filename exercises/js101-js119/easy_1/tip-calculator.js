const readlineSync = require('readline-sync');

const bill = parseFloat(readlineSync.question("What is the bill? "));
const percentage = parseFloat(readlineSync.question("What is the tip percentage? "));

const tip = (percentage / 100) * bill;
const totalBill = tip + bill;
console.log()

console.log(`The tip is $${tip.toFixed(2)}`)
console.log(`The total is $${totalBill.toFixed(2)}`)