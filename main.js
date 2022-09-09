/*VARIABLES*/
let respnseRound;
let selector = document.querySelectorAll('.item');
let player;
let computerSelection;
let pointsPlayer = 0;
let pointsComputer = 0
let viewPointsPlayer = document.querySelector('.player-points');
let viewPointsComputer = document.querySelector('.computer-points');
let summary = document.querySelector('.summary')

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
}

function fiveRound(res){
    summary.innerText = ''
    if(res === 1){
        pointsPlayer += 1
        viewPointsPlayer.innerText = pointsPlayer;
    } else if (res == 2){
        pointsComputer += 1;
        viewPointsComputer.innerText = pointsComputer;
    } else {
        pointsComputer += 1;
        pointsPlayer += 1
        viewPointsPlayer.innerText = pointsPlayer;
        viewPointsComputer.innerText = pointsComputer;
    }
    
    if (pointsComputer == 5){
        summary.innerText = 'You are a disappointment you have lost the battle'
        pointsComputer = 0;
        pointsPlayer = 0;
        viewPointsComputer.innerText = pointsComputer;
        viewPointsPlayer.innerText = pointsPlayer;
    } else if(pointsPlayer == 5){
        summary.innerText = 'You are a champion, you have won the battle.'
        console.log('Win PLAYER!!!')
        pointsPlayer = 0;
        pointsComputer = 0;
        viewPointsPlayer.innerText = pointsPlayer;
        viewPointsComputer.innerText = pointsComputer;
    }
}

selector.forEach(Element => {
    Element.addEventListener('click', () => {
        player = Element.getAttribute('value');
        computerSelection = getComputerChoice();

        respnseRound = playRound(player,computerSelection);
        console.log(respnseRound)
        fiveRound(respnseRound);
        console.log(`puntos player: ${pointsPlayer} puntos computer: ${pointsComputer}`)
    })
})