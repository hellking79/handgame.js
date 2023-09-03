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
rocks.addEventListener(`click`,e=>{
  PlayerChoice=(`rock`);
  playround(PlayerChoice)
})
papers.addEventListener(`click`,e=>{
  PlayerChoice=(`paper`);
  playround(PlayerChoice)
})
scissors.addEventListener(`click`,e=>{
  PlayerChoice=(`scissor`);
  playround(PlayerChoice)
})
let p=0;
let c=0;


//its a function that let the computer to choose
//rock,paper,scissors at randome

// a funcrion that plays 5 rounds and keep track of the rounds  and how much
// you wone and the computer wone

    //let player=alert(`round${i+1}:what do you choose(rock,paper,scissors?`);
   function updateresults(message){
    const resultsDiv=document.querySelector(`#results`)
    resultsDiv.textContent=message;
   }
   function playround(PlayerChoice){
    function getcomputerchoice(){
        let game=[`rock`,`paper`,`scissor`];
        const rando=game[Math.floor(Math.random()*game.length)];
        return rando;};
    
    let comp=getcomputerchoice();
   
    if(PlayerChoice===`rock`&&comp===`scissors`){
        updateresults(`you win rock beats scissor`)
        p++
    }
    else if(PlayerChoice===`scissors`&&comp===`rock`){
        updateresults(`you lose rock beats scissor`)
        c++
    }
    else if(PlayerChoice===`paper`&&comp===`rock`){
        updateresults(`you win paper beats rock`)
        p++
    }
    else if(PlayerChoice===`rock`&&comp===`paper`){
        updateresults(`you lose paper beats scissor`)
        c++
    }
    else if(PlayerChoice===`scissors`&&comp===`paper`){
        updateresults(`you win scissor beats rock`)
        p++
    }
    else if(PlayerChoice===`paper`&&comp===`scissor`){
        updateresults(`you lose scissors beats paper`)
           c++
    }
    else if(PlayerChoice===`rock`&&comp===`rock`){
        p++ 
        c++
        updateresults(`its a tie you both chose rock`)
        
    }
        else if(PlayerChoice===`paper`&&comp===`paper`){
            updateresults(`its a tie you both chose paper`)
            p++ 
            c++
        }
       else if(PlayerChoice===`scissor`&&comp===`scissor`){ 
        updateresults(`its a tie you both chose scissor`)
      p++ 
      c++        
        }         
        updateresults(`Player wins: ${p} Computer wins: ${c}`); 
        
    }
console.log(playround)
