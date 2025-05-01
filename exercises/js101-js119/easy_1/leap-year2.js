function isGregorianLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)
}

function isJulianLeapYear(year) {
  return year % 4 === 0
}

function isLeapYear(year) {
  return year <= 1752 ? isJulianLeapYear(year) : isGregorianLeapYear(year)
}

console.log(true === isLeapYear(2016));      // true
console.log(false === isLeapYear(2015));      // false
console.log(false === isLeapYear(2100));      // false
console.log(true === isLeapYear(2400));      // true
console.log(true === isLeapYear(240000));    // true
console.log(false === isLeapYear(240001));    // false
console.log(true === isLeapYear(2000));      // true
console.log(false === isLeapYear(1900));      // false
console.log(true === isLeapYear(1752));      // true
console.log(true === isLeapYear(1700));      // true
console.log(false === isLeapYear(1));         // false
console.log(true === isLeapYear(100));       // true
console.log(true === isLeapYear(400));       // true
