//Play variable
let playable = true;
//Enemy
let enemyName = "Squirtle";
let enemyHP = 100;
let enemyAtt = 0;
//Player
let playerName = "Charizard";
let playerHP = 100;
let playerAtt = 0;


//Turns
let turn = true;

let messageBox = "";

//Creates the canvas
function setup(){
    createCanvas(1000 ,700);
}

function draw(){
    //Player health
    noFill();
    stroke(1);
    rect(0, 200, 250, 50); 
    textSize(20);
    fill(0);
    text(playerName, 10, 225);

    //Enemy health
    noFill();
    rect(600, 300, 250, 50);
    fill(0);
    text(enemyName, 610, 325);

    

    //hp bars
    fill(255);
    stroke(5);
    rect(10, 235, 230, 10);
    rect(610, 335, 230, 10);

    fill(150, 0, 0);
    rect(11, 236, playerHP * 2.28, 8);
    rect(611, 336, enemyHP * 2.28, 8);
    
    //attack box
    stroke(5);
    noFill();
    
    rect(0, 400, 1000, 300, 20);
    rect(500, 410, 480, 280, 20);
    
    
    fill(0);
    textSize(36);
    text("Attack", 690, 490);
    fill(0);
    textSize(36);
    text("Reset", 693, 630);
    textSize(30);
    text(messageBox, 100, 500, 200, 200)
   
    line(500, 550, 980, 550);
    noFill();

    //attack button
    
        
    
}
//When attack is pressed 
function mouseClicked() {
    if(mouseX>=500 && mouseX<=980 && mouseY>=410 && mouseY<=550 && turn == true && playable){
        playerAttack();
        console.log(enemyHP+enemyName);
    } else if (mouseX>=500 && mouseX<=980 && mouseY>=410 && mouseY<=550 && turn == false && playable) {
        enemyAttack();
        console.log(playerHP+playerName);
    } else if (mouseX>=500 && mouseX<=980 && mouseY>=550 && mouseY<=730) {
        playerHP = 100;
        enemyHP = 100;
        turn = true;
        playable = true;
        clearMessage();
    }
}
//Player attack/damage
function playerAttack(){
    if(turn == true) {
        playerAtt = Math.ceil(random(20));
        enemyHP -= playerAtt;
        messageBox = playerName + " has attacked for " + playerAtt + " damage!! Nice hit!"
    } 
    if(enemyHP < 0){
        enemyHP = 0;
        playerAtt = 0;
        playable = false;
        messageBox = playerName + " has just knocked my boy " + enemyName + " the f**k out."
    }
    turn = false;
    clearMessage();
}
//Enemy attack/damage
function enemyAttack(){
    if (turn == false) {
        enemyAtt = Math.ceil(random(20));
        playerHP -= enemyAtt;
        messageBox = enemyName + " has attacked for " + enemyAtt + " damage!! Nice hit!"
        
    } 
    if (playerHP < 0){
        playerHP = 0;
        playerAtt = 0;
        playable = false;
        messageBox = enemyName + " has just knocked my boy " + playerName + " the f**k out."
    }
    turn = true;
    clearMessage();
}

function clearMessage() {
    noStroke();
    fill(255);
    rect(100, 500, 350, 220);
    stroke(1);
}