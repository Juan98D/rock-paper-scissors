function getPlayerSelection() {
    let playerSelecion = prompt('elija un valor: \n1)Piedra\n2)Tijera\n3)Papel').toUpperCase();
    console.log(playerSelecion)
    if (playerSelecion === 'PIEDRA') {
        return 'PIEDRA'
        
    } else if (playerSelecion == 'TIJERA') {
        return 'TIJERA'
    } else if (playerSelecion === 'PAPEL') {
        return 'PAPEL'
    }
    
};

function getComputerChoice() {
    let computerSelection = Math.floor(Math.random()*3)+1;

    if(computerSelection === 1) {
        return 'PIEDRA'
    } else if (computerSelection === 2) {
        return 'TIJERA'
    } else if (computerSelection === 3) {
        return 'PAPEL'
    }
}

function playRound (playerSelection, computerSelection) {

    console.log(playerSelection + ' ' + computerSelection);

    if((playerSelection === 'TIJERA' || playerSelection === 'PIEDRA' || playerSelection === 'PAPEL') && 
    (computerSelection === 'TIJERA' || computerSelection === 'PIEDRA' || computerSelection === 'PAPEL')){

        if(playerSelection === computerSelection) {
            console.log('Empate')
            return 3
        } else if(playerSelection === 'PIEDRA' && computerSelection === 'TIJERA') {
            console.log('PLAYER WIN!!!')
            return 1
        } else if (playerSelection === 'TIJERA' && computerSelection === 'PAPEL') {
            console.log('PLAYER WIN!!!')
            return 1
        } else if (playerSelection === 'PAPEL' && computerSelection === 'PIEDRA') {
            console.log('PLAYER WIN!!!')
            return 1
        } else {
            console.log('COMPUTER WIN!!!')
            return 2
        }        

    } else {
        console.log('Seleccione una opcion valida')
    }

}

function game () {

    pointsComputer = 0;
    pointsPlayer = 0; 

    
    for(let i = 0;i<4;i++) {
        let round = playRound(getPlayerSelection(),getComputerChoice())
    
        if(round === 1){
                pointsPlayer +=1
        } else if(round === 2) {
                pointsComputer +=1
        } else {
               pointsComputer += 0;
               pointsPlayer += 0; 
        }
    }
    
    console.log(`Points player: ${pointsPlayer}, poinst computer: ${pointsComputer}`)
    
    if(pointsPlayer > pointsComputer){
        console.log('CHAMPION!!!')
    } else if (pointsComputer === pointsPlayer) {
        console.log('it was a sad draw')
    } else {
        console.log('You Lose! Paper beats Rock')
    }

    
}

game()

  /*1. piedra 2. tijera 3. papel */

