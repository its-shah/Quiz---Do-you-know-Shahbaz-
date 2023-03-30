var readlineSync = require("readline-sync");

var userWelcome = readlineSync.question("What's Your Name?")

console.log("Welcome " + userWelcome + " to How Well Do You Know Shahbaz :)")


var score = 0;

var hScore = 5;


function play(question, answer){
  var userQuestion = readlineSync.question(question)
  if(userQuestion == answer){
    score++;
    if(score>1){
    console.log("You are right again!")
    }else{
      console.log("You are right!")
    }
  }else{
    console.log("You are wrong!")
  }
}

var questionsToAsk = [
  {
    question : "When is my birthday? ",
    answer : "september 20"
  },

{
  question: "Where Do I Live? ",
  answer : "patna"
},

  {
    question :"Do I prefer coffee or tea? ", 
    answer : "tea"
  },

  {
    question :"Am I a morning person or a night owl? ", 
    answer : "night owl"
  },

  {
    question :"Would I rather live by the ocean or in the mountains? ", 
    answer : "mountains"
  },

  

  {
    question :"Can I Cook Food (yes/No) ", 
    answer : "yes"
  },
]

for(var i=0; i<questionsToAsk.length; i++){
  var arr = questionsToAsk[i];
  play(arr.question, arr.answer);
  console.log("==============================")
}

if(score > hScore){
  console.log("Congratulations!!! You've beaten the highest score")
  console.log("And your Score is " + score);
}else{
  console.log("Your Score is " + score);
}



