var canvas, backgroundImage;
var allPlayers
var distance = 0

var gameState = 0;
var playerCount;

var database;
var startImage
var playImage
var form, player, game;

/*function preload(){
  startImage = loadImage("startbg.png")
  playImage = loadImage("background.jpg")
}*/
function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(255)
  if (playerCount=== 4){
    game.update(1)
  }
  if (gameState ===1 ){
    game.play()
  }
}
