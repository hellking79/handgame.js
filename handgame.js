


//console.log(randomItem);
function getcomputerchoice(){
    let game=[`rock`,`paper`,`siccors`];
    return rando =game[Math.floor(Math.random()*game.length)]; 
}
let comp=getcomputerchoice();
console.log(`my computer chose`,comp,`from the game`);