/*var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

// Prompt user to input data in console.
console.log('What is your name');

// When user input data and click enter key.
standard_input.on('userName', function (userName) {

*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your name:`, (userName) => {
  

//var userName = prompt('What is your name');

if (userName) {
  console.log('Hello, ' + userName + '.');
}
 console.log('Hello!');

// var userQuestion = prompt('Please provide a questions');

readline.question('Please provide a questions', (userQuestion) => {


    readline.close();

var randomNumber = Math.floor(Math.random() * 7);
console.log(randomNumber);
var eightBall = '';

switch (randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Dont count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

console.log('User question: ' + userQuestion); 

console.log('The eight ball answer: ' + eightBall);
})
})

