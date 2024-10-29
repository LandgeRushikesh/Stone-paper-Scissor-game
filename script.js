let r = document.body.querySelector("#stone")
let p = document.body.querySelector("#paper")
let s = document.body.querySelector("#scissor")
let msg = document.body.querySelector(".msg")
let userScore = document.body.querySelector("#user-score")
let compScore = document.body.querySelector("#comp-score")

let userChoice;
r.addEventListener("click",()=>{
    userChoice = 'stone';
    checkWinner();
})
p.addEventListener("click",()=>{
    userChoice = 'paper';
    checkWinner();
})
s.addEventListener("click",()=>{
    userChoice = 'scissor';
    checkWinner();
})
let compTurn = () =>{
    let random = Math.floor(Math.random()*3);
    if(random === 0){
        return 'stone';
    }
    else if(random ===1){
        return 'paper';
    }
    else if(random ===2){
        return 'scissor';
    }
}
let UserWin = true;
let compChoice;
let checkWinner = ()=>{
    compChoice = compTurn();
    if(userChoice === compChoice){
        Draw();
    }
    else{
        if(userChoice === 'stone'){
            if(compChoice === 'scissor'){
                UserWin = true;
            }
            else{
                UserWin = false;
            }
        }
        else if(userChoice === 'paper'){
            if(compChoice === 'stone'){
                UserWin = true;
            }
            else{
                UserWin = false;
            }
        }
        else if(userChoice === 'scissor'){
            if(compChoice === 'paper'){
                UserWin = true;
            }
            else{
                UserWin = false;
            }
        }
        showWinner(UserWin);
    }
}
let userCount = 0;
let compCount = 0;
let showWinner = (UserWin)=>{
    if(UserWin){
        msg.innerText = `You won, ${userChoice} beats ${compChoice}!!`;
        msg.style.backgroundColor = "green";
        userCount++;
    }
    else{
        msg.innerText = `you lost, ${compChoice} beats ${userChoice}!!`;
        msg.style.backgroundColor = "red";
        compCount++;
    }
    score(userCount,compCount);
}
let Draw = ()=>{
    msg.innerText = "Game Draw!! Play again...";
    msg.style.backgroundColor = "black";
}
let score = (userCount,compCount) =>{
    userScore.innerText = userCount;
    compScore.innerText = compCount;
}