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

const computerSelection = computerPlay();

function gamePlay(playerSelection, computerSelection){
    
    if(playerSelection ===  'rock'){
        if(computerSelection === 'Rock'){ alert('DRAW!'); return 'draw';}
        else if(computerSelection === 'Scissors'){ alert('You WIN!'); return 'win1';}
        else if(computerSelection === 'Paper'){ alert('You Lose!'); return 'lose2';}
    }else if(playerSelection ===  'scissors'){
        if(computerSelection === 'Rock'){ alert('You Lose!'); return 'lose2';}
        else if(computerSelection === 'Scissors'){ alert('DRAW!'); return 'draw';}
        else if(computerSelection === 'Paper'){ alert('You WIN!'); return 'win1';}
    }else if(playerSelection ===  'paper'){
        if(computerSelection === 'Rock'){ alert('You WIN!'); return 'win1';}
        else if(computerSelection === 'Scissors'){ alert('You Lose!'); return 'lose2';}
        else if(computerSelection === 'Paper'){ alert('DRAW!'); return 'draw';}    
    }
}
   

function game(times){

    let count1 = 0;
    let count2 = 0;
    let ties = 0;
    i = 0;
    

    while(i < times){
    
    //PlayerSelection Input...
    const playerSelection = prompt('Input your choice:').toLowerCase();
    
    let resultGame = gamePlay(playerSelection, computerSelection);
    
    //Win counter
    if(resultGame === 'win1'){
        count1++;
    }else if(resultGame === 'lose2'){
        count2++;
    }else if(resultGame === 'draw'){
        ties++;
    }
    i++;
    } //end of Loop

    //Final Score
    if(count1 > count2){
        console.log('And the winner is: Player 1 with '+ count1 + ' - ' + count2 + '. Ties : ' + ties );
    }else if (count2 > count1){
        console.log('And the winner is The Computer! with '+ count2+ ' - ' + count1 + '. Ties : ' + ties);
    }else{
        console.log('Ended on draw, number of ties: '+ ties);
    }
}
game(5);
