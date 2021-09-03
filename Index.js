var readlinesync = require("readline-sync");
var name = readlinesync.question('May i know your name: ')
console.log("Hi "+name+" Welcome to do you know Anurag ?")

//Array of Questions and answers
var questions = [{question:"Where do i live",
answer:"kotdwara"},
{question:"which company i work in",
answer:"WNS"},
{question:"what i am doing",
answer:"cycling"}]
var score = 0

//loop
for (var i = 0; i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

function play(question, answer){
  var userAnswer = readlinesync.question(question)
  if (userAnswer === answer ){
    console.log("you are right")
    score ++
  }

}
console.log("your score is :"+ score)
