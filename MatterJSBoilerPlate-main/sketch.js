
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var groundObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	//createCanvas(800, 700);
	createCanvas(windowWidth,windowHeight)

	engine = Engine.create();
	world = engine.world;
    groundObj = new Ground(1,550,10000,5);
	leftSide = new Ground(800,485,5,120);
	rightSide = new Ground(1100,485,5,120);
	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
    ball=Bodies.circle(200,100,20,ball_options)
	World.add(world,ball)
    rectMode(CENTER);
    
	ellipseMode(RADIUS);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  ellipse(ball.position.x,ball.position.y,20,20)
  
 
	 
  //Engine.update(engine);
 
  
}

function keyPressed(){
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(ball,{x: ball.position.x, y: ball.position.y},{x: 80, y: -80})
		
	}
}

  
  
