let userscore =0;
let compscore =0;

const choices = document.querySelectorAll(".choice") ;

const msgpara = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")

const gencompchoice = ()=>{
    const options =["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

//draw game
const drawgame= ()=>{
   
    msgpara.innerText ="match draw !";
    msgpara.style.background ="blue";
}

const showWinner =(userwin)=>{
    if(userwin){
        userscore++;
        userScorePara.innerText =userscore;
       
        msgpara.innerText ="you win !";
        msgpara.style.background ="green";
    }else {
        compscore++;
        compScorePara.innerText =compscore;
        
        msgpara.innerText ="you lose !";
        msgpara.style.background ="red";
    }

}

const playgame= (userchoice) =>{
   // console.log("userchoice - ",userchoice);

    //genrate computer choices
    const compChoicse =gencompchoice();
  //  console.log("comp choice - ",compChoicse);

    if(userchoice===compChoicse){

        drawgame();
    }else{
        let userwin= true;
        if (userchoice ==="rock"){
            //rock ,paper
            userwin =compChoicse === "paper" ? false : true;
        }else if(userchoice ==="paper"){
            //rock ,scissor
            userwin =compChoicse === "scissor" ? true : false;
        }else {
            //rock paper
            userwin =compChoicse === "rock" ? false : true;
        }
        showWinner(userwin)
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userchoice= choice.getAttribute("id");
       // console.log("choice was clicked ", userchoice)
        playgame(userchoice)
    });

});