


//console.log(randomItem);
function getcomputerchoice(){
    let game=[`rock`,`paper`,`scissors`];
    return rando =game[Math.floor(Math.random()*game.length)]; 
}
let comp=getcomputerchoice();
console.log(`my computer chose`,comp,`from the game`);

let player=prompt(`what do you choose?`)
function rock(playerselection,computerselection){
   playerselection=player.toLowerCase();
   computerselection=comp.toLowerCase();
    if(player===`rock`&&comp===`scissors`){
        alert(`you win rock beats scissors`)
    }
    else if(player===`scissors`&&comp===`rock`)[
        alert(`you lose rock beats scissors`)
    ]
    else if(player===`paper`&&comp===`rock`)[
        alert(`you win paper beats rock`)
    ]
    else if(player===`rock`&&comp===`paper`)[
        alert(`you lose paper beats scissors`)
    ]
    else if(player===`scissors`&&comp===`paper`)[
        alert(`you win scissors beats rock`)
    ]
    else if(player===`paper`&&comp===`scissors`)[
        alert(`you lose scissors beats paper`)
    ]
    else if(player===`rock`&&comp===`rock`)[
        alert(`its a tie you both chose rock`)
    ]
        else if(player===`paper`&&comp===`paper`)[
            alert(`its a tie you both chose paper`)
        ]
        else if(player===`scissors`&&comp===`scissors`)[
            alert(`its a tie you both chose scissors`)
        ]
        else(`somethingis wrong with the code`)

    console.log(computerselection,playerselection);
}
rock(player,comp);