let munstersDescription = "The Munsters are creepy and spooky.";

console.log(
  munstersDescription
  .split('')
  .map(c => {
    return c.toLowerCase() === c ? c.toUpperCase() : c.toLowerCase()
  })
  .join(''))