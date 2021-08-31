var readlineSync = require('readline-sync');
var chalk= require('chalk')
score = 0;
var highestScore={
  name: "pooja",
  score: "6"
}

var userName = readlineSync.question("what is your name: ");

console.log(chalk.blue.bold("Welcome " + userName + " Lets Play GK question" ))
console.log("----------------------------")

function play(question, answer) {
  
    var userAnswer = readlineSync.question(question)
    if (userAnswer == answer) {
        score = score + 1;
        console.log(chalk.bgGreen.bold("YEAH you are Right!" + " || " + " Score is: " +score +" "));
    } else {
        console.log(chalk.bgRed.bold("NO you are Wrong!" + " || " + " Score is: " +score +" "))

    }
    console.log("Correct answer is: " +answer)
    console.log("----------------------------")
}

var questions = [
  {
    question: "[1] How many legs does a crab have? \n [a] seven \n [b] Three \n [c] Ten \n Your Answer is: ",
    answer: "a" 
  },
  {
    question: "[2] How tall is a basketball hoop (in ft)? \n [a] 5 \n [b] 10 \n [c] 30 \n Your Answer is: ",
    answer: "b"
  }, {
    question: "[3] What type of animal is a poodle? \n (a) Monkey \n (b) Cat \n (c) Dog \n Your Answer is: ",
    answer: "c"
  },{
    question:"[4] How may Oscars has Meryl Streep won? \n [a] 5 \n [b] 10 \n [c] 3 \n Your Answer is: ",
    answer:"c"
  },
  {
    question:"[5] What's the fastest animal in the world? \n [a] Lion \n [b] Elephant \n [c] Cheetah \n Your Answer is: ",
    answer:"c"
  },
  {
    question:"[6] How many bones in the adult human body? \n [a] 390 \n [b] 206 \n [c] 100 \n Your Answer is: ",
    answer:"b"
  }
];

for(i=0;i<questions.length;i++){
  var currentQuestion = questions[i]
  play(currentQuestion.question, currentQuestion.answer)
}


function finalResult() {
  console.log('Your Final SCORE: ', score)
  console.log(chalk.bgCyan.bold('Current Highest Score: ' + highestScore.score + ' made by ' + highestScore.name))
  
if (score > highestScore.score) {
    console.log(chalk.bgCyan.bold('Congratulations!!! You have made new record by scoring ' + score))
  }
}
finalResult();
console.log("----------------------------")

