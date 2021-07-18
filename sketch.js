//var ball;
var database;
var playerCount;
var gameState = 0;
var allPlayers;
var distance = 0;

var form, player, game;

function setup(){
    createCanvas(400,400);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();

    

}



function draw(){
    background("white");

    if(playerCount === 4){
        game.update(1);
    }

    if(gameState === 1){
        game.play();
        clear();
    }
}

