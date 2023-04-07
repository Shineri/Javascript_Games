const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const btn = document.querySelectorAll('button');
const resultDisplay = document.getElementById('result');


let userChoice;
let computerChoice;


function diplayResult(){
    if(userChoice===computerChoice){
        resultDisplay.innerHTML=" It's a Draw!";
    }
    else if(userChoice=='rock' && computerChoice=='scissor')
    resultDisplay.innerHTML='Yipee! You Win';

    else if(userChoice=='rock' && computerChoice=='paper')
    resultDisplay.innerHTML='uhhh! You lose';

    else if(userChoice=='paper' && computerChoice=='scissor')
    resultDisplay.innerHTML='uhhh! You lose';

    else if(userChoice=='paper' && computerChoice=='rock')
    resultDisplay.innerHTML='Yipee! You Win';

    else if(userChoice=='scissor' && computerChoice=='rock')
    resultDisplay.innerHTML='uhhh! You lose';

    else if(userChoice=='scissor' && computerChoice=='paper')
    resultDisplay.innerHTML='Yipee! You Win';
}


function generateComputerChoice(){
    let randomNumber = (Math.floor(Math.random()*10))%3 +1;

    if(randomNumber===1){
        computerChoice='rock';
    }
    if(randomNumber===2){
        computerChoice='paper';
    }
    if(randomNumber===3){
        computerChoice='scissor';
    }
    computerChoiceDisplay.innerHTML=computerChoice;

}

btn.forEach(value=> value.addEventListener('click',(e)=>{
    userChoice=e.target.id;
    userChoiceDisplay.innerHTML=userChoice;
    generateComputerChoice();
    diplayResult();
}))