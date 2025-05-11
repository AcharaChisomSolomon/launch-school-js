const p = console.log;

function greatestProduct(string) {
  const stringArr = string.split('')
  return stringArr.slice(0, string.length - 4 + 1).reduce((currMax, _, id) => {
    const currProduct = stringArr.slice(id, id + 4).reduce((product, num) => product * Number(num), 1)
    return currProduct > currMax ? currProduct : currMax
  }, -Infinity)
}

p(greatestProduct('23456') === 360);      // 3 * 4 * 5 * 6
p(greatestProduct('3145926') === 540);    // 5 * 9 * 2 * 6
p(greatestProduct('1828172') === 128);    // 1 * 8 * 2 * 8
p(greatestProduct('123987654') === 3024); // 9 * 8 * 7 * 6