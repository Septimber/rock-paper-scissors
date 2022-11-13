const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const player_score = document.querySelector('#player_score')
const computer_score = document.querySelector('#computer_score')
const rounds_text = document.querySelector('#rounds')
const state = document.querySelector('#status')
let rounds = 5
let playerScore = 0
let computerScore = 0

function getComputerChoice(input){
  let result = Math.floor(Math.random() * 3)
  if(result === 2){
    playRound(input, 'rock')
  }
  else if(result === 1){
    playRound(input, 'scissors')
  }
  else{
    playRound(input, 'paper')
  }
}

function playRound(playerSelection, computerSelection){
  if(rounds !== 0){
    switch(playerSelection === 'rock'){
      case computerSelection === 'scissors':
      playerScore = playerScore + 1
      player_score.textContent = `Player Score: ${playerScore}`
      rounds = rounds - 1
      rounds_text.textContent = `Rounds: ${rounds}`
      state.textContent = `Player Won!`
      break
      case computerSelection === 'paper':
      computerScore = computerScore + 1
      computer_score.textContent = `Computer Score: ${computerScore}`
      console.log("The computer won!")
      state.textContent = `Computer Won!`
      rounds = rounds - 1
      rounds_text.textContent = `Rounds: ${rounds}`
      break
      case computerSelection === 'rock':
      rounds_text.textContent = `Rounds: ${rounds}`
      state.textContent = `Draw!`
    }
  }else{
    state.textContent = `Game Over!`
    if(playerScore > computerScore){
      rounds_text.textContent = `You beat the computer!`
    }else{
      rounds_text.textContent = `You lost to the computer!`
    }

  }

}


function playGame(){
  rock.addEventListener('click', () => {
    getComputerChoice('rock')
  })

  paper.addEventListener('click', () => {
    getComputerChoice('paper')
  })

  scissors.addEventListener('click', () =>{
    getComputerChoice('scissors')
  })
}


playGame()
