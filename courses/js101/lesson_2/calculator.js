const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json')['en']

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function getFirstNumber() {
  prompt(MESSAGES['firstNumberRequest']);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES['invalidNumberError']);
    number1 = readline.question();
  }

  return number1
}

function getSecondNumber() {
  prompt(MESSAGES['secondNumberRequest']);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES['invalidNumberError']);
    number2 = readline.question();
  }

  return number2
}

function getOperation() {
  prompt(MESSAGES['operationRequest']);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGES['operationError'])
    operation = readline.question();
  }

  return operation
}

function showResult(number1, number2, operation) {
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`${MESSAGES['resultOutputPrefix']} ${output}`)
}

function wantsToRestart() {
  prompt(MESSAGES['restartRequest'])
  let response = readline.question()
  return response.toLowerCase() === 'y'
}

function startCalculator() {
  let restart = false
  do {
    prompt("----------------------")
    prompt(MESSAGES['welcome']);
    let number1 = getFirstNumber()
    let number2 = getSecondNumber()
    let operation = getOperation()
    showResult(number1, number2, operation)
    restart = wantsToRestart()
  } while (restart);
  prompt(MESSAGES['goodBye'])
}

startCalculator()
