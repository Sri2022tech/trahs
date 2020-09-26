var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var slingshot;
var dustBinobj;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

	ground = new Ground (800,670,2000,20);
	paper = new Paper (200,450,20);
	dustBinobj = new Trashcan(1200,650)
  //slingshot = new Slingshot(paper.body,{x:200,y:100});



	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
  paper.display();
  dustBinobj.display();
 // slingshot.display();    
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
       Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
     }
   }
  /* function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
*/
