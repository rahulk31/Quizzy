const readLineSync = require('readline-sync');
const chalk = require('chalk');

// Creating a quiz app for user to select odd one out.
let score = 0;

const questionList =[
  { ques: 'var, let, const : ', ans: 'var' },
  { ques: 'for, while, switch : ', ans: 'switch' },
  { ques: 'MacOS, Dell, Hp, Lenovo : ', ans: 'MacOS' },
  { ques: 'mouse, keyboard, scanner, monitor : ', ans: 'monitor' },
  { ques: 'floppy, hdd, ssd, mic : ', ans: 'mic' }
];

function checkAnsPrintCurrScore(i, ans) {
  if(questionList[i].ans.toLowerCase() === ans.toLowerCase()) {
    score++;
    console.log(chalk.blue('You\'re right, current score: ' + score));  
  }
  else {
    console.log(chalk.red('Ooops! You\'re wrong.'));
  }
  console.log(chalk.yellow('--------------------------------'));
}

const username = readLineSync.question('May I Know your name: ');
console.log('Welcome ' + username);
console.log('ODD ONE OUT!!');
let reply = readLineSync.question(chalk.green('Shall we start the game? Reply (y/n) : '));
console.log('--------------------------------');

while(reply.toLowerCase() === 'y') {
  for(let i=0; i < questionList.length; i++) {
    const answer = readLineSync.question(questionList[i].ques);
    checkAnsPrintCurrScore(i, answer);
  }
  console.log('Your final score : ' + score);
  console.log('\n');
  reply = readLineSync.question(chalk.green('Would you like to play again? (y/n) : '));
  score = 0;
}