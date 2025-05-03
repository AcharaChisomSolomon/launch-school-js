const LOWER_LIMIT = 20;
const UPPER_LIMIT = 120;

const randomAge = Math.floor(Math.random() * (UPPER_LIMIT - LOWER_LIMIT + 1)) + LOWER_LIMIT
console.log(`Teddy is ${randomAge} years old!`)