const OUTPUT = 'The Flintstones Rock!'

for (let i = 0; i < 10; i++) {
  console.log(OUTPUT.padStart(i + OUTPUT.length))
}