const container=document.querySelector(`#container`)
const button1=document.createElement(`button`)
button1.textContent=(`rock`)
button1.id=`rocks`
 container.append(button1);

const button2=document.createElement(`button`)
       button2.textContent=(`paper`)
button2.id=`papers`
       container.append(button2);
       
        const button3=document.createElement(`button`)
       button3.textContent=(`scissor`)
button3.id=`scissors`  
       container.append(button3);  
const rocks=document.querySelector(`#rocks`)
const papers=document.querySelector(`#papers`)
const scissors=document.querySelector(`#scissors`)
 let PlayerChoice;
//eventlisteners
rocks.addEventListener(`click`,()=>{
  PlayerChoice=`rock`
})
papers.addEventListener(`click`,()=>{
  PlayerChoice=`paper`
})scissors.addEventListener(`click`,()=>{
  PlayerChoice=`scissor`
})
let p=0;
let c=0;
let i=0;

//its a function that let the computer to choose
//rock,paper,scissors at randome

// a funcrion that plays 5 rounds and keep track of the rounds  and how much
// you wone and the computer wone
{ 
    //let player=alert(`round${i+1}:what do you choose(rock,paper,scissors?`);
    let comp=getcomputerchoice();
   
    if(PlayerChoice===`rock`&&comp===`scissors`){
        alert(`you win rock beats scissors`)
        p++
    }
    else if(PlayerChoice===`scissors`&&comp===`rock`){
        alert(`you lose rock beats scissors`)
        c++
    }
    else if(PlayerChoice===`paper`&&comp===`rock`){
        alert(`you win paper beats rock`)
        p++
    }
    else if(PlayerChoice===`rock`&&comp===`paper`){
        alert(`you lose paper beats scissors`)
        c++
    }
    else if(PlayerChoice===`scissors`&&comp===`paper`){
        alert(`you win scissors beats rock`)
        p++
    }
    else if(PlayerChoice===`paper`&&comp===`scissors`){
        alert(`you lose scissors beats paper`)
           c++
    }
    else if(PlayerChoice===`rock`&&comp===`rock`){
        p++ 
        c++
        alert(`its a tie you both chose rock`)
        
    }
        else if(PlayerChoice===`paper`&&comp===`paper`){
            alert(`its a tie you both chose paper`)
            p++ 
            c++
        }
       else if(playerChoice===`scissors`&&comp===`scissors`){
            alert(`its a tie you both chose scissors`)
            p++ 
            c++        
        }


        console.log(`Player wins: ${p} Computer wins: ${c}`);
  
        
  }
function getcomputerchoice(){
    let game=[`rock`,`paper`,`scissors`];
    const rando=game[Math.floor(Math.random()*game.length)];
    return rando;};

