//console.log(randomItem);

let p=0;
let c=0;

//its a function that let the computer to choose
//rock,paper,scissors at randome

function getcomputerchoice(){
    let game=[`rock`,`paper`,`scissors`];
    const rando=game[Math.floor(Math.random()*game.length)];
    return rando;};
// a funcrion that plays 5 rounds and keep track of the rounds  and how much
// you wone and the computer wone
    for(i=0;i<=5;i++){ 
    let player=prompt(`round${i+1}:what do you choose(rock,paper,scissors?`)
    let comp=getcomputerchoice();
   
    if(player===`rock`&&comp===`scissors`){
        alert(`you win rock beats scissors`)
        p++
    }
    else if(player===`scissors`&&comp===`rock`){
        alert(`you lose rock beats scissors`)
        c++
    }
    else if(player===`paper`&&comp===`rock`){
        alert(`you win paper beats rock`)
        p++
    }
    else if(player===`rock`&&comp===`paper`){
        alert(`you lose paper beats scissors`)
        c++
    }
    else if(player===`scissors`&&comp===`paper`){
        alert(`you win scissors beats rock`)
        p++
    }
    else if(player===`paper`&&comp===`scissors`){
        alert(`you lose scissors beats paper`)
           c++
    }
    else if(player===`rock`&&comp===`rock`){
        p++ 
        c++
        alert(`its a tie you both chose rock`)
        
    }
        else if(player===`paper`&&comp===`paper`){
            alert(`its a tie you both chose paper`)
            p++ 
            c++
        }
        else if(player===`scissors`&&comp===`scissors`){
            alert(`its a tie you both chose scissors`)
            p++ 
            c++        
        }

        console.log(`Player wins: ${p} Computer wins: ${c}`);
  
        
  }

