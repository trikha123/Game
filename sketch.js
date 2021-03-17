const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var platform;
var bird, slingShot;
var gameState = 0 
var score = 0

function preload() {
   polIMG = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(0,300,1200,20);
    block1 =  new Block(300, 275, 30, 40)
    block2 = new Block(330, 275, 30, 40)
    block3 = new Block(360, 275, 30, 40)
    block4 = new Block(390, 275, 30, 40)
    block5 = new Block(420, 275, 30, 40)
    block6 = new Block(450, 275, 30, 40)
    block7 = new Block(480, 275, 30, 40)
    block8 = new Block(330, 235, 30, 40)
    block9 = new Block(360, 235, 30, 40)
    block10 = new Block(390, 235, 30, 40)
    block11 = new Block(420, 235, 30, 40)
    block12 = new Block(450, 235, 30, 40)
    block14 = new Block(360, 195, 30, 40)
    block15 = new Block(390, 195, 30, 40)
    block16 = new Block(420, 195, 30, 40)
    block17 = new Block(390, 155, 30, 40)
    ball = Bodies.circle(75, 200, 20)
    World.add(world, ball)
    slingshot = new SlingShot(this.ball, {x:150, y:200})


}

function draw(){
    background(0)
    Engine.update(engine);
    textSize(30)
    fill("blue")
    text("Score:"  + score, 100, 100)
   
    if(gameState === 0){
    ground.display();
    block1.display();
    block1.score();
    block2.display();
    block2.score();
    block3.display();
    block3.score();
    block4.display();
    block4.score();
    block5.display();
    block5.score();
    block6.display();
    block6.score();
    block7.display();
    block7.score();
    block8.display();
    block8.score();
    block9.display();
    block9.score();
    block10.display();
    block10.score();
    block11.display();
    block11.score();
    block12.display();
    block12.score();
    block14.display();
    block14.score();
    block15.display();
    block15.score();
    block16.display();
    block16.score();
    block17.display();
    block17.score();
    imageMode(CENTER)
    image(polIMG, ball.position.x,ball.position.y, 40, 40 )
    slingshot.display();
   
    




    }
   

    drawSprites();
   


   
        
}
 

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode=== 32){
        slingshot.attach(this.ball)
        
    }

}

