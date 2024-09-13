const txt = document.getElementById("bold")
const btn = document.getElementById("mybtn")

const p1 = document.getElementById("highorlow")
const p2 =document.getElementById("final")
const maxnum = 6;
const minnum = 1;
const answer = Math.floor(Math.random()* (maxnum-minnum +1)) + minnum;
let running = true;
let attempt =0;

btn.onclick = function(){
    const guess= Number(document.getElementById("guess").value);

    if(isNaN(guess)){
        p1.textContent=`INVALID INPUT`;
    }
    else if(guess >maxnum || guess< minnum){
        p1.textContent =`Number out of range`;
    }
    else{
        if (guess > answer ){
            attempt++;
            p2.textContent = `Number too high`;
        }
        else if (guess < answer ){
            attempt++;
            p2.textContent = `Number too low`;
        }
        else{
            attempt++;
            p2.textContent =`You are correct. You took ${attempt} attempts to guess it correct`;
            running = false;
        }
    }
    
}



