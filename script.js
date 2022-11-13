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
  switch(playerSelection === 'rock'){
    case computerSelection === 'scissors':
    console.log("The player won!")
    break
    case computerSelection === 'paper':
    console.log("The computer won!")
    break
    case computerSelection === 'rock':
    console.log('Draw!')
  }
}


function playGame(){
  let input = prompt('Please enter rock, paper, or scissors')
  let result = input.toLowerCase()
  getComputerChoice(result)
}
