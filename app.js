let gameseq=[] ;
let userseq=[] ;
let btns= ["red" , "yellow", "blue", "purple"] ;

let gamestarted = false ;
let level=0 ; 
let h3= document.querySelector("h2") ;

document.addEventListener("keypress" , function(){
    if(gamestarted == false){
        console.log("game started !") ;
        gamestarted = true ;
        levelup() ;
    }
     
});

 function gameflash(btn){
    btn.classList.add("flash") ;
    setTimeout(function () {
        btn.classList.remove("flash") ;
    } , 250) ;
 }

 function userflash(btn){
    btn.classList.add("userflash") ;
    setTimeout(function () {
        btn.classList.remove("userflash") ;
    } , 250) ;
 }

function levelup(){
    userseq=[] ;
    level++ ;
    h3.innerText= `Level ${level}` ;
   
    let rdnidx= Math.floor(Math.random() * 3) ;
    let rdncolor = btns[rdnidx] ;
    let rdnbtn = document.querySelector(`.${rdncolor}`) ;
    // console.log(rdnidx) ;
    // console.log(rdncolor) ;
    // console.log(rdnbtn) ;
    gameseq.push(rdncolor);
    console.log(gameseq) ;
    gameflash(rdnbtn) ;
}

function checkans(idx){
    if(userseq[idx]===gameseq[idx]){
       if(userseq.length==gameseq.length)
       {
        setTimeout(levelup , 1000) ;
       }
    }
    else{
        h3.innerHTML=  `Game Over ! Your Score Was <b> ${level} <b> <br> Press any key to restart` ;
        console.log("Game Over !")
        document.querySelector("body").style.backgroundColor = "red" ;
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white" ;
        }, 250) ;
        reset() ;
    }
}

function btnpress(){
    let btn = this ;
    userflash(btn) ;
    let usercolor = btn.getAttribute("id") ;
    userseq.push(usercolor) ; 
    checkans(userseq.length-1) ;
}

let allbtns = document.querySelectorAll(".btn") ;
for(btn of allbtns){
    btn.addEventListener("click" , btnpress) ;
}

function reset(){
    gamestarted = false ;
    gameseq = [] ;
    userseq = [] ;
    level = 0;
}