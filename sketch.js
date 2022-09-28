var canvas;
var backgroundImage;
var bgImg;
var database;
var myform, myplayer, mygame;
var playerCount;
var mygamestate;
var myplayercount;
var car1,car2,car1Image,car2Image,trackImage
var cars=[]

var allplayers

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  trackImage=loadImage('./assets/track.jpg')
  car1Image=loadImage('./assets/car1.png')
  car2Image=loadImage('./assets/car2.png')
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  mygame = new Game();
  mygame.start();
  mygame.getstate()
}

function draw() {
  background(backgroundImage);

  if (myplayercount === 2) {
    mygame.updatestate(1);
  }
  if (mygamestate === 1) {
    mygame.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
