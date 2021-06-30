Engine = Matter.Engine;
World = Matter.World;
Bodies = Matter.Bodies;

var engine, world;
var snow = [];

function preload(){
    backgroundImg=loadImage("snow1.jpg")
 }
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  if(frameCount % 150 === 0){

    for (var j = 75; j <=width; j=j+50) 
   {
       snow.push(new Snow(j,75));
    }
  }
}
function draw() {
  background("backgroundImg");
  Engine.update(engine);
  if(frameCount%5===0){
    snow.push(new Snow(random(0.800),30,30))
  }
   for (var i = 0; i < snow.length; i++) {
       snow[i].display();    }
}
