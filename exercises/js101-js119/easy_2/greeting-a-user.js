const readlineSync = require('readline-sync')

const name = readlineSync.question("What is your name? ")

if (name.endsWith('!')) {
  console.log(`hello ${name}. why are we screaming?`.toUpperCase())
} else {
  console.log(`Hello ${name[0].toUpperCase() + name.substring(1)}.`)
}