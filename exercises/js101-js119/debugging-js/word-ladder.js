let ladder = '';
// const arr = ['head', 'heal', 'teal', 'tell', 'tall', 'tail']

['head', 'heal', 'teal', 'tell', 'tall', 'tail'].forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail