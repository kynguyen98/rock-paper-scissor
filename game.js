var user_score = 0;
var pc_score = 0;

const user_scoreSpan = document.getElementById("usr-score");
const pc_scoreSpan = document.getElementById("pc-score");
const resul_div = document.querySelector(".result > p"); // return the first element that match the css selector
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function converttowrd (word){
    if (word == "p") return "Paper";
    else if (word == "r") return "Rock";
    else return "Scissor";
};
function pc_choices(){
    choices = ["r","p","s"];
    pc = choices[Math.floor(Math.random()*3)];
    return pc;
};
function win (usr_choice, pc_choice){
    user_score = user_score + 1;
    pc_score = pc_score;
    user_scoreSpan.innerHTML = user_score;
    pc_scoreSpan.innerHTML = pc_score;
    resul_div.innerHTML = converttowrd(usr_choice) + " beats " + converttowrd(pc_choice) + " you win 69! " + "👏";
};
function lost (usr_choice, pc_choice){
    user_score = user_score;
    pc_score = pc_score + 1;
    user_scoreSpan.innerHTML = user_score;
    pc_scoreSpan.innerHTML = pc_score;
    resul_div.innerHTML = converttowrd(pc_choice) + " beats " + converttowrd(usr_choice) + " you lost! 😢";
};
function draw (){
    user_score = user_score;
    pc_score = pc_score;
    user_scoreSpan.innerHTML = user_score;
    pc_scoreSpan.innerHTML = pc_score;
    resul_div.innerHTML = " 🔥 " +"It's a DRAW" + " 🔥 ";
};
function game (user_choice){
    const pc_choice = pc_choices();
    switch (user_choice+pc_choice){
        case "pr": case "rs": case "sp":
            win(user_choice,pc_choice);
     //       result();
            break;
        case "rp": case "sr": case "ps":
            lost(user_choice,pc_choice);
       //     result();
            break
        case "pp": case "rr": case "ss":
            draw();
         //   result();
            break;
    }
};
rock_div.addEventListener("click", function(){
    game("r");
}
);
paper_div.addEventListener("click", function(){
    game("p");
}
);
scissor_div.addEventListener("click", function(){
    game("s");
}
);

