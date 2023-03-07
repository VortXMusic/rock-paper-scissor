//Query Selectors
// const rock = document.querySelector('#rock');
// const paper = document.querySelector('#paper');
// const scissors = document.querySelector('#scissors');
const playerButtons = document.querySelectorAll('.player-button');
const roundWinner = document.querySelector('#round-winner');
const playerDisplay = document.querySelector('#player-score');
const computerDisplay = document.querySelector('#computer-score');
const gameWin = document.querySelector('#result');
const pChoice = document.querySelector('#player-choice');
const cChoice = document.querySelector('#computer-choice');

//Global Variable declaration
const items = ['Rock','Paper','Scissors'];
let playerScore = 0, computerScore = 0;
let endFlag=false; //Flag used to decide whether to end the game or not
const playerWinCondition='Rock-Scissors Paper-Rock Scissors-Paper'; //Player win condition pairs
let playerSelection;

playerDisplay.textContent=(`${playerScore}`);
computerDisplay.textContent=(`${computerScore}`);


//returns Rock, Paper or Scissors randomly
let getComputerChoice = () => items[Math.floor(Math.random()*items.length)];

let roundWin=(winner)=>roundWinner.textContent = `${winner} wins the round!`;

//Plays 1 round where the player and computer selections are given
function playRound(playerSelection)
{
    let computerSelection=getComputerChoice();
    pChoice.textContent = playerSelection;
    cChoice.textContent = computerSelection;
    let roundSelection = playerSelection+'-'+computerSelection;
    console.log(roundSelection);
    if(playerSelection == computerSelection)
        roundWinner.textContent = "Tie! Nobody wins this round!";
    else
    {
        if(playerWinCondition.includes(roundSelection))
        {
            playerScore++;
            roundWin("Player");
        }
        else
        {
            computerScore++;
            roundWin("Computer");
        }
        if(playerScore==5)
        {
            gameWin.textContent = "Player wins the game by winning 5 rounds first! The scores have been reset!";
            playerScore = 0, computerScore = 0;
        }
        else if(computerScore==5)
        {
            gameWin.textContent = "Computer wins the game by winning 5 rounds first! The scores have been reset!";
            playerScore = 0, computerScore = 0;
        }
        playerDisplay.textContent=(`${playerScore}`);
        computerDisplay.textContent=(`${computerScore}`);
    }
}


//Event Listeners
// rock.addEventListener('click',playRound("Rock",getComputerChoice()));
// paper.addEventListener('click',playRound("Paper",getComputerChoice()));
// scissors.addEventListener('click',playRound("Scissors",getComputerChoice()));
playerButtons.forEach((button)=>button.addEventListener('click',()=>playRound(button.id)));








//Old playerChoice function
// function getPlayerChoice()
// {
//     let choice=prompt('Choose whether you want a Rock, a Paper or Scissors. Type n if you want to end the game: ');
//     return choice;
// }


//Old game loop
// do
// {
//     //Making sure the player enters a valid choice
//     // do{
//     //     playerSelection=getPlayerChoice();
//     //     //Optional end game function
//     //     if(playerSelection=='n')
//     //     {
//     //         endFlag=true;
//     //         break mainLoop; //breaks out of mainLoop, endind the game as a result
//     //     } 
//     //     if(!items.includes(playerSelection))
//     //         console.log('You have entered an invalid choice, please try again!');
//     // }while(!items.includes(playerSelection));

// let computerSelection=getComputerChoice();

// //Displaying Selections, round result and Scores
// console.log('Player Selection: '+playerSelection+'\nComputer Selection: '+computerSelection);
// console.log(playRound(playerSelection,computerSelection));
// console.log('Player Score:'+playerScore+'     Computer Score: '+computerScore);

// //Checks for game end conditions
// if(playerScore==5||computerScore==5)
// {
//     //Decides who the winner of the game is:
//     playerScore==5?console.log('Player wins the game!!'):console.log('Computer Wins the game!!');

//     //Option to restart the game
//     // let endChoice=prompt('Enter \'y\' if you want to restart the game: ');
//     // if(endChoice=='y'||endChoice=='Y'||endChoice=='Yes')
//     //     playerScore=0, computerScore=0;
//     // else
//     //     endFlag=true;
// }
// }while(endFlag==false);