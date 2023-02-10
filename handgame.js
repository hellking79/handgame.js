

for(let i=0;i<5;i++){
  function playRound(playerSelection, computerSelection) {
    // your code here!
  
    if (playerSelection === computerSelection) {
      return `its a tie`;
    } else if (playerSelection === `rock` && computerSelection === `scissor`) {
      return `you win rock beats scissors`
    } else if (playerSelection === `paper` && computerSelection === `rock`) {
      return `you win paper beats rock`
    } else if (playerSelection === `scissor` && computerSelection === `paper`) {
      return `you win scissors cut paper`
    }
  }
  
  function getComputerChoice() {
    let g = [`rock`, `paper`, `scissor`]
    return g[Math.floor(Math.random() * g.length)];
  
  }
  
  function playerchoice() {
    let p=[`rock`,`paper`,`scissor`]
    return p[Math.floor(Math.random()*p.length)];
  }
  const playerSelection =playerchoice();
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
}