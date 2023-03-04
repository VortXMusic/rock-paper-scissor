//Global Variable declaration
let items = ['Rock','Paper','Scissors'];
let playerScore = 0, computerScore = 0;
let endFlag=false;


//returns Rock, Paper or Scissors randomly
let getComputerChoice = () => items[Math.floor(Math.random()*items.length)];


