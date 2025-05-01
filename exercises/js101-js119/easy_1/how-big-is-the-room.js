const readline = require('readline-sync');
const SQUARE_FEET_PER_SQUARE_METER = 10.7639

console.log("Enter the length of the room in meters:");
const length = parseInt(readline.question())

console.log("Enter the width of the room in meters:")
const width = parseInt(readline.question())

const areaInMeter = length * width
const areaInFeet = areaInMeter * SQUARE_FEET_PER_SQUARE_METER

console.log(`The area of the room is ${areaInMeter.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`)