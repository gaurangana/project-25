
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;                 
const Body = Matter.Body;

var engine , myworld, ground, GROUNDSPRITE, dustbin1, dustbin2, dustbin3, Ball, paperObject,dustbinIg

function preload()
{
	dustbinIg = loadImage("sprites/dustbingreen.png")
}

function setup() {
	createCanvas(1200, 400);
	 rectMode(CENTER);
	 engine= Engine.create()
	  myworld= engine.world

	 var option={ 
		isStatic: true
	  }
	  ground = Bodies.rectangle(600,height,1200,20,option)
	  World.add(myworld,ground)

     //var option= {
    // restitution: 0.8
     // }
     //World.add(myworld, ball)
    //createSprite(400, 200, 50, 50);
	
	  

	  GROUNDSPRITE= createSprite(ground.position.x , ground.position.y,1200,20)

	  dustbin1= new Dustbin(792,320,20,150)
	  dustbin2= new Dustbin(1010,320,20,150)
	  dustbin3= new Dustbin(900,380,200,20)
	  paperObject = new Paper (136,347)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  image(dustbinIg,900,295,200,100) 
 // circle(ball.position.x , ball.position.y ,40 )
 rectMode(CENTER)
 
// image(bg,0,0,1200,400)
  //dustbin1.display() ;
  //dustbin2.display() ;
  dustbin3.display() ;
  paperObject.display() ;
  drawSprites();
  text(mouseX+","+mouseY,mouseX,mouseY)
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x: 185, y: -185 });
		
	}
}

