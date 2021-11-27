
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dustbinObj, paperObject,groundObject;	
var engine,world;


function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
  groundObject=new ground(800,690,1600,10)
  dustbinObj=new dustbin(1000,690)
  paperObject=new paper(100,650,40)
	
}


function draw() {

  background("skyblue");
  Engine.update(engine);
  groundObject.display()
paperObject.display()
dustbinObj.display()

}

function keyPressed(){
    if(keyCode === 32 ){
      
  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:95,y:-65})   
    }
}


