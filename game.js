function computerPlay(){
    var random = Math.floor((Math.random() * 9) + 1);

    if(random <= 3 && random >= 0){
        return 'Rock';
    }
    else if( random > 3 && random <= 6){
        return 'Paper';
    }
    else if (random > 6 && random <= 9){
        return 'Scissors';
    }
}

const playerSelection = prompt('Input your choice:').toLowerCase();
const computerSelection = computerPlay();

function gamePlay(playerSelection, computerSelection){
    
    if(playerSelection ===  'rock'){
        if(computerSelection === 'Rock'){return 'draw';}
        else if(computerSelection === 'Scissors'){return 'win';}
        else if(computerSelection === 'Paper'){return 'lose';}
    }else if(playerSelection ===  'scissors'){
        if(computerSelection === 'Rock'){return 'lose';}
        else if(computerSelection === 'Scissors'){return 'draw';}
        else if(computerSelection === 'Paper'){return 'win';}
    }else if(playerSelection ===  'paper'){
        if(computerSelection === 'Rock'){return 'win';}
        else if(computerSelection === 'Scissors'){return 'lose';}
        else if(computerSelection === 'Paper'){return 'draw';}    
    }
}


function game(){

    
    
}
game();
